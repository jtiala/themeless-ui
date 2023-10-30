/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
import style from "@themeless-ui/style/dist/heading.css?inline";
import { cn } from "@themeless-ui/utils";
import { unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import { TUIComponent } from "../../utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const className = cn("heading");

@customElement("tui-heading")
export class Heading extends TUIComponent {
  /**
   * The level of the heading.
   */
  @property({ type: Number })
  level!: HeadingLevel;

  static styles = unsafeCSS(style);

  override render() {
    const tag = unsafeStatic(`h${this.level}`);

    return html`
      <${tag} class="${className}" id="${this.id}" data-testid="${this.testId}">
        <slot></slot>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-heading": Heading;
  }
}
