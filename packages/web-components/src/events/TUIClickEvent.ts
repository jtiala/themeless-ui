export class TUIClickEvent extends MouseEvent {
  constructor() {
    super("tui-click", { bubbles: true, composed: true });
  }
}
