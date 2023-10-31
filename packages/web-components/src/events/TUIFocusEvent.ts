export class TUIFocusEvent extends FocusEvent {
  constructor() {
    super("tui-focus", { bubbles: true, composed: true });
  }
}
