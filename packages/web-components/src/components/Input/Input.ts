import style from "@themeless-ui/style/dist/input.css?inline";
import { cn } from "@themeless-ui/utils";
import { html, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  TUIBlurEvent,
  TUIChangeEvent,
  TUIClickEvent,
  TUIFocusEvent,
  TUIMouseEnterEvent,
  TUIMouseLeaveEvent,
  TUITouchEndEvent,
  TUITouchStartEvent,
} from "../../events";
import { TUIComponent } from "../TUIComponent";

const className = cn("input");

@customElement("tui-input")
export class Input extends TUIComponent {
  /**
   * Type of the input.
   *
   * @default text
   */
  @property()
  type?: HTMLInputElement["type"];

  /**
   * Name of the input.
   */
  @property()
  name?: HTMLInputElement["name"];

  /**
   * Prevent the user from interacting with the input.
   */
  @property({ type: Boolean })
  disabled?: HTMLInputElement["disabled"];

  /**
   * Indicates that the user should not be able to edit the value of the input.
   */
  @property({ type: Boolean })
  readOnly?: HTMLInputElement["readOnly"];

  /**
   * Indicates that the user must specify a value for the input before the owning form can be submitted.
   */
  @property({ type: Boolean })
  required?: HTMLInputElement["required"];

  /**
   * Brief hint for the user as to what kind of information is expected in the input.
   */
  @property()
  placeholder?: HTMLInputElement["placeholder"];

  /**
   * The value of the input.
   * Use only when using the input as controlled component (state handled by React).
   */
  @property()
  value?: HTMLInputElement["value"];

  private _handleChange() {
    this.dispatchEvent(new TUIChangeEvent());
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

  static styles = unsafeCSS(style);

  constructor() {
    super();

    this.type = "text";
  }

  override render() {
    return html`
      <input
        type="${this.type}"
        name="${this.name || nothing}"
        placeholder="${this.placeholder || nothing}"
        value="${this.value || nothing}"
        ?disabled="${this.disabled}"
        ?readOnly="${this.readOnly}"
        ?required="${this.required}"
        @change="${this._handleChange}"
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
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-input": Input;
  }
}
