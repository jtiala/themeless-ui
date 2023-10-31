import style from "@themeless-ui/style/dist/anchor.css?inline";
import { cn } from "@themeless-ui/utils";
import { html, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  TUIBlurEvent,
  TUIClickEvent,
  TUIFocusEvent,
  TUIMouseEnterEvent,
  TUIMouseLeaveEvent,
  TUITouchEndEvent,
  TUITouchStartEvent,
} from "../../events";
import { TUIComponent } from "../TUIComponent";

const className = cn("anchor");

@customElement("tui-anchor")
export class Anchor extends TUIComponent {
  /**
   * The URL that the hyperlink points to.
   */
  @property()
  href?: HTMLAnchorElement["href"];

  /**
   * The relationship of the linked URL.
   *
   * If `rel` is not defined and the anchor has `target` as `_blank`, the following relationships will be added automatically:
   * - `noopener` to prevent reverse tabnabbing
   * - `noreferrer` to prevent passing referrer information to the target
   */
  @property()
  rel?: HTMLAnchorElement["rel"];

  /**
   * Where to display the linked URL.
   */
  @property()
  target?: HTMLAnchorElement["target"];

  /**
   * Causes the browser to treat the linked URL as a download.
   */
  @property()
  download?: HTMLAnchorElement["download"];

  static styles = unsafeCSS(style);

  private _handleClick() {
    this.dispatchEvent(new TUIClickEvent());
  }

  private _handleFocus() {
    this.dispatchEvent(new TUIFocusEvent());
  }
  private _handleBlur() {
    this.dispatchEvent(new TUIBlurEvent());
  }

  private _handleMouseEnter() {
    this.dispatchEvent(new TUIMouseEnterEvent());
  }

  private _handleMouseLeave() {
    this.dispatchEvent(new TUIMouseLeaveEvent());
  }

  private _handleTouchStart() {
    this.dispatchEvent(new TUITouchStartEvent());
  }

  private _handleTouchEnd() {
    this.dispatchEvent(new TUITouchEndEvent());
  }

  override render() {
    const openInNewTab = this.target === "_blank";
    const linkRelationships =
      this.rel || openInNewTab ? "noopener noreferrer" : undefined;

    return html`
      <a
        href="${this.href || nothing}"
        rel="${linkRelationships || nothing}"
        target="${this.target || nothing}"
        download="${this.download || nothing}"
        @click="${this._handleClick}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
        @mouseEnter="${this._handleMouseEnter}"
        @mouseLeave="${this._handleMouseLeave}"
        @touchStart="${this._handleTouchStart}"
        @touchEnd="${this._handleTouchEnd}"
        class="${className}"
        id="${this.id || nothing}"
        data-testid="${this.testId || nothing}"
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-anchor": Anchor;
  }
}
