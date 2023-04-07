import { createElement, ReactNode } from "react";
import { cn } from "../../utils/css";

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

type GeneralProps = {
  /**
   * The type of the rendered element.
   *
   * @default span
   */
  type?: Extract<
    TextType,
    | "b"
    | "cite"
    | "code"
    | "del"
    | "em"
    | "i"
    | "ins"
    | "kbd"
    | "mark"
    | "s"
    | "samp"
    | "small"
    | "span"
    | "strong"
    | "sub"
    | "sup"
    | "u"
    | "var"
  >;

  /**
   * Only available when `type` is `abbr`.
   *
   * It's recommended to provide a full expansion of the abbreviated term in plain text on the first use of the abbreviation.
   * If it's not viable to provide the expansion as full text, `title` should be used instead.
   */
  title?: never;

  /**
   * Only available when `type` is `q`, `del`, or `ins`.
   *
   * `q`: A URI of the source of the information quoted.
   * `del` or `ins`: A URI for a resource that explains the change.
   */
  cite?: never;

  /**
   * Only available when `type` is `del` or `ins`.
   *
   * Indicates the time and date of the change. Must be a valid date string with an optional time.
   */
  datetime?: never;
};

type AbbreviationProps = {
  type: Extract<TextType, "abbr">;
  title?: string;
  cite?: never;
  datetime?: never;
};

type QuoteProps = {
  type: Extract<TextType, "q">;
  title?: never;
  cite?: string;
  datetime?: never;
};

type DeletedTextProps = {
  type: Extract<TextType, "del">;
  title?: never;
  cite?: string;
  datetime?: string;
};

type InsertedTextProps = {
  type: Extract<TextType, "ins">;
  title?: never;
  cite?: string;
  datetime?: string;
};

type CommonProps = {
  /**
   * Text content.
   */
  children?: ReactNode;
};

export type TextProps = (
  | GeneralProps
  | AbbreviationProps
  | DeletedTextProps
  | InsertedTextProps
  | QuoteProps
) &
  CommonProps;

const className = cn("text");

/**
 * Display inline text content with different styles.
 */
export function Text({ type, children, ...rest }: TextProps) {
  return createElement(type || "span", { className, ...rest }, children);
}
