// Note: TouchEvent doesn't work in Safari
export class TUITouchEndEvent extends PointerEvent {
  constructor() {
    super("tui-touch-end", { bubbles: true, composed: true });
  }
}
