export class TUIMouseEnterEvent extends MouseEvent {
  constructor() {
    super("tui-mouse-enter", { bubbles: true, composed: true });
  }
}
