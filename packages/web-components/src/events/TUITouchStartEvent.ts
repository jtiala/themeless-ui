// Note: TouchEvent doesn't work in Safari
export class TUITouchStartEvent extends PointerEvent {
  constructor() {
    super("tui-touch-start", { bubbles: true, composed: true });
  }
}
