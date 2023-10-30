import style from "@themeless-ui/style/dist/blockquote.css?inline";
import { cn } from "@themeless-ui/utils";
import { html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TUIComponent } from "../../utils";

const blockquoteClassName = cn("blockquote");
const quoteClassName = cn("blockquote-quote");
const authorClassName = cn("blockquote-author");
const sourceClassName = cn("blockquote-source");

@customElement("tui-blockquote")
export class Blockquote extends TUIComponent {
  /**
   * A URI of the source of the information quoted.
   */
  @property()
  cite?: string;

  /**
   * Author of the quotation.
   */
  @property()
  author?: string;

  /**
   * Source of the quotation.
   */
  @property()
  source?: string;

  static styles = unsafeCSS(style);

  override render() {
    const authorElement = this.author
      ? html`<span className="${authorClassName}">&mdash;${this.author}</span>`
      : undefined;

    const sourceElement = this.source
      ? html`<cite key="source" className="${sourceClassName}">
          ${this.source}
        </cite>`
      : undefined;

    const divider =
      this.author && this.source ? html`<span>, </span>` : undefined;

    const footer =
      authorElement || sourceElement
        ? html`<footer>${authorElement}${divider}${sourceElement}</footer>`
        : undefined;

    return html`
      <blockquote
        cite="${this.cite}"
        class="${blockquoteClassName}"
        id="${this.id}"
        data-testid="${this.testId}"
      >
        <div className="${quoteClassName}"><slot></slot></div>
        ${footer}
      </blockquote>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-blockquote": Blockquote;
  }
}
