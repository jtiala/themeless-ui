import style from "@themeless-ui/style/dist/stack.css?inline";
import { cn, cns } from "@themeless-ui/utils";
import { html, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TUIComponent } from "../TUIComponent";

const stackClassName = cn("stack");
const verticalClassName = cn("stack-vertical");
const horizontalClassName = cn("stack-horizontal");

type Direction = "vertical" | "horizontal";

@customElement("tui-stack")
export class Stack extends TUIComponent {
  /**
   * The direction to stack the elements.
   *
   * @default vertical
   */
  @property()
  direction!: Direction;

  static styles = unsafeCSS(style);

  constructor() {
    super();

    this.direction = "vertical";
  }

  override render() {
    const classNames = cns(stackClassName, {
      [verticalClassName]: this.direction === "vertical",
      [horizontalClassName]: this.direction === "horizontal",
    });

    return html`
      <div
        class="${classNames}"
        id="${this.id || nothing}"
        data-testid="${this.testId || nothing}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-stack": Stack;
  }
}
