import { cn } from "@themeless-ui/utils";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TUIComponent } from "../../utils";

const className = cn("paragraph");

@customElement("tui-paragraph")
export class Paragraph extends TUIComponent {
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
