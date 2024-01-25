import style from "@themeless-ui/style/dist/prose.css?inline";
import { cn } from "@themeless-ui/utils";
import { html, nothing, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { TUIComponent } from "../TUIComponent";

const className = cn("prose");

@customElement("tui-prose")
export class Prose extends TUIComponent {
  static styles = unsafeCSS(style);

  override render() {
    return html`
      <div
        class="${className}"
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
    "tui-prose": Prose;
  }
}
