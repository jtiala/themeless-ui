import style from "@themeless-ui/style/dist/paragraph.css?inline";
import { cn } from "@themeless-ui/utils";
import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { TUIComponent } from "../../utils";

const className = cn("paragraph");

@customElement("tui-paragraph")
export class Paragraph extends TUIComponent {
  static styles = unsafeCSS(style);

  override render() {
    return html`
      <p class="${className}" id="${this.id}" data-testid="${this.testId}">
        <slot></slot>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-paragraph": Paragraph;
  }
}
