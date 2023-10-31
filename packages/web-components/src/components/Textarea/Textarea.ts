import style from "@themeless-ui/style/dist/textarea.css?inline";
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

const className = cn("textarea");

@customElement("tui-textarea")
export class Textarea extends TUIComponent {
  /**
   * Name of the textarea.
   */
  @property()
  name?: HTMLTextAreaElement["name"];

  /**
   * Prevent the user from interacting with the textarea.
   */
  @property({ type: Boolean })
  disabled?: HTMLTextAreaElement["disabled"];

  /**
   * Indicates that the user should not be able to edit the value of the textarea.
   */
  @property({ type: Boolean })
  readOnly?: HTMLTextAreaElement["readOnly"];

  /**
   * Indicates that the user must specify a value for the textarea before the owning form can be submitted.
   */
  @property({ type: Boolean })
  required?: HTMLTextAreaElement["required"];

  /**
   * Brief hint for the user as to what kind of information is expected in the textarea.
   */
  @property()
  placeholder?: HTMLTextAreaElement["placeholder"];

  /**
   * The value of the textarea.
   * Use only when using the textarea as controlled component (state handled by React).
   */
  @property()
  value?: HTMLTextAreaElement["value"];

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

  override render() {
    return html`
      <textarea
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
      ></textarea>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-textarea": Textarea;
  }
}
