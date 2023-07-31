import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { AnchorHTMLAttributes, ReactNode } from "react";

type HTMLAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type AnchorProps = {
  /**
   * The URL that the hyperlink points to.
   */
  href?: HTMLAnchorProps["href"];

  /**
   * The relationship of the linked URL.
   *
   * If `rel` is not defined and the anchor has `target` as `_blank`, the following relationships will be added automatically:
   * - `noopener` to prevent reverse tabnabbing
   * - `noreferrer` to prevent passing referrer information to the target
   */
  rel?: HTMLAnchorProps["rel"];

  /**
   * Where to display the linked URL.
   */
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];

  /**
   * Causes the browser to treat the linked URL as a download.
   */
  download?: AnchorHTMLAttributes<HTMLAnchorElement>["download"];

  /**
   * A function that is called when the anchor is clicked.
   */
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];

  /**
   * A function that is called when the anchor is focused.
   */
  onFocus?: AnchorHTMLAttributes<HTMLAnchorElement>["onFocus"];

  /**
   * A function that is called when the anchor hast lost focus.
   */
  onBlur?: AnchorHTMLAttributes<HTMLAnchorElement>["onBlur"];

  /**
   * A function that is called when mouse enters the anchor.
   */
  onMouseEnter?: AnchorHTMLAttributes<HTMLAnchorElement>["onMouseEnter"];

  /**
   * A function that is called when mouse leaves the anchor.
   */
  onMouseLeave?: AnchorHTMLAttributes<HTMLAnchorElement>["onMouseLeave"];

  /**
   * A function that is called when one or more touch points are placed on the touch surface.
   */
  onTouchStart?: AnchorHTMLAttributes<HTMLAnchorElement>["onTouchStart"];

  /**
   * A function that is called when one or more touch points are removed from the touch surface.
   */
  onTouchEnd?: AnchorHTMLAttributes<HTMLAnchorElement>["onTouchEnd"];

  /**
   * Anchor content.
   */
  children?: ReactNode;
} & CommonComponentProps;

const className = cn("anchor");

/**
 * Display a hyperlink.
 */
export function Anchor({
  href,
  rel,
  target,
  download,
  onClick,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  children,
  testId,
}: AnchorProps) {
  const openInNewTab = target === "_blank";
  const linkRelationships =
    rel || openInNewTab ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      rel={linkRelationships}
      target={target}
      download={download}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={className}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
