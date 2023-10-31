export class TUIBlurEvent extends FocusEvent {
  constructor() {
    super("tui-blur", { bubbles: true, composed: true });
  }
}
