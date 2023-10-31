import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export class TUIComponent extends LitElement {
  /**
   * Provide `data-testid` attribute for the component to be used with testing tools.
   * While the `testId` is a useful way for targeting the component, it should be used as a last resort.
   * Whenever possible, use other attributes or selectors that have semantic meaning, such as `id` or `name`.
   */
  @property()
  testId?: string;
}
