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
  target?: HTMLAnchorProps["target"];

  /**
   * Causes the browser to treat the linked URL as a download.
   */
  download?: HTMLAnchorProps["download"];

  /**
   * A function that is called when the anchor is clicked.
   */
  onClick?: HTMLAnchorProps["onClick"];

  /**
   * A function that is called when the anchor is focused.
   */
  onFocus?: HTMLAnchorProps["onFocus"];

  /**
   * A function that is called when the anchor hast lost focus.
   */
  onBlur?: HTMLAnchorProps["onBlur"];

  /**
   * A function that is called when mouse enters the anchor.
   */
  onMouseEnter?: HTMLAnchorProps["onMouseEnter"];

  /**
   * A function that is called when mouse leaves the anchor.
   */
  onMouseLeave?: HTMLAnchorProps["onMouseLeave"];

  /**
   * A function that is called when one or more touch points are placed on the touch surface.
   */
  onTouchStart?: HTMLAnchorProps["onTouchStart"];

  /**
   * A function that is called when one or more touch points are removed from the touch surface.
   */
  onTouchEnd?: HTMLAnchorProps["onTouchEnd"];

  /**
   * Anchor content.
   */
  children?: ReactNode;
} & CommonComponentProps;

const className = cn("anchor");

/**
 * A hyperlink used for navigation within the application or to external resources.
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
  id,
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
      id={id}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
