/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
import { cn } from "@themeless-ui/utils";
import { customElement, property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import { TUIComponent } from "../../utils";

type TextType =
  | "abbr"
  | "b"
  | "cite"
  | "code"
  | "del"
  | "em"
  | "i"
  | "ins"
  | "kbd"
  | "mark"
  | "q"
  | "s"
  | "samp"
  | "small"
  | "span"
  | "strong"
  | "sub"
  | "sup"
  | "u"
  | "var";

const className = cn("text");

@customElement("tui-text")
export class Text extends TUIComponent {
  /**
   * The type of the rendered element.
   *
   * @default span
   */
  @property()
  type?: TextType;

  /**
   * Only available when `type` is `abbr`.
   *
   * It's recommended to provide a full expansion of the abbreviated term in plain text on the first use of the abbreviation.
   * If it's not viable to provide the expansion as full text, `title` should be used instead.
   */
  // TODO: this shouldn't have !
  @property()
  title!: string;

  /**
   * Only available when `type` is `q`, `del`, or `ins`.
   *
   * `q`: A URI of the source of the information quoted.
   * `del` or `ins`: A URI for a resource that explains the change.
   */
  @property()
  cite?: string;

  /**
   * Only available when `type` is `del` or `ins`.
   *
   * Indicates the time and date of the change. Must be a valid date string with an optional time.
   */
  @property()
  dateTime?: string;

  override render() {
    const tag = unsafeStatic(this.type || "span");

    return html`
      <${tag}
        title="${this.title}"
        cite="${this.cite}"
        dateTime="${this.dateTime}"
        class="${className}"
        id="${this.id}"
        data-testid="${this.testId}"
      >
        <slot></slot>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tui-text": Text;
  }
}
