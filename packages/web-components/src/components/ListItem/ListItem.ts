import { html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { TUIComponent } from "../TUIComponent";

@customElement("tui-list-item")
export class ListItem extends TUIComponent {
  override render() {
    return html`
      <li id="${this.id || nothing}" data-testid="${this.testId || nothing}">
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-list-item": ListItem;
  }
}
