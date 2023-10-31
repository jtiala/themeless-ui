import style from "@themeless-ui/style/dist/button.css?inline";
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

const className = cn("button");

@customElement("tui-button")
export class Button extends TUIComponent {
  /**
   * Type of the button.
   */
  @property()
  type?: HTMLButtonElement["type"];

  /**
   * Name of the button.
   */
  @property()
  name?: HTMLButtonElement["name"];

  /**
   * Prevents the user from interacting with the button: it cannot be pressed or focused.
   */
  @property({ type: Boolean })
  disabled?: HTMLButtonElement["disabled"];

  static styles = unsafeCSS(style);

  constructor() {
    super();

    this.type = "button";
  }

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
    return html`
      <button
        type="${this.type}"
        name="${this.name || nothing}"
        ?disabled="${this.disabled}"
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
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-button": Button;
  }
}
