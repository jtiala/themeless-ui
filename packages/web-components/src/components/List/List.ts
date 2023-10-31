/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
import style from "@themeless-ui/style/dist/list.css?inline";
import { cn } from "@themeless-ui/utils";
import { nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import { TUIComponent } from "../TUIComponent";

type ListType = "ordered" | "unordered";

const className = cn("list");

@customElement("tui-list")
export class List extends TUIComponent {
  /**
   * Type of the list.
   *
   * @default unordered
   */
  @property()
  type?: ListType;

  static styles = unsafeCSS(style);

  override render() {
    const tag = unsafeStatic(this.type === "ordered" ? "ol" : "ul");

    return html`
      <${tag}
        class="${className}"
        id="${this.id || nothing}"
        data-testid="${this.testId || nothing}"
      >
        <slot></slot>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-list": List;
  }
}
