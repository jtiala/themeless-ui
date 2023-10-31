export class TUIMouseLeaveEvent extends MouseEvent {
  constructor() {
    super("tui-mouse-leave", { bubbles: true, composed: true });
  }
}
