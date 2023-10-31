export class TUIChangeEvent extends Event {
  constructor() {
    super("tui-change", { bubbles: true, composed: true });
  }
}
