import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { ReactNode } from "react";

export type BlockquoteProps = {
  /**
   * A URI of the source of the information quoted.
   */
  cite?: string;

  /**
   * Author of the quotation.
   */
  author?: string;

  /**
   * Source of the quotation.
   */
  source?: string;

  /**
   * Quotation content.
   */
  children?: ReactNode;
} & CommonComponentProps;

const blockquoteClassName = cn("blockquote");
const quoteClassName = cn("blockquote-quote");
const authorClassName = cn("blockquote-author");
const sourceClassName = cn("blockquote-source");

/**
 * Display an extended quotation.
 */
export function Blockquote({
  cite,
  author,
  source,
  children,
  id,
  testId,
}: BlockquoteProps) {
  return (
    <blockquote
      cite={cite}
      className={blockquoteClassName}
      id={id}
      data-testid={testId}
    >
      <div className={quoteClassName}>{children}</div>
      {(author || source) && (
        <footer>
          {author && <span className={authorClassName}>&mdash;{author}</span>}
          {author && source && <span>, </span>}
          {source && (
            <cite key="source" className={sourceClassName}>
              {source}
            </cite>
          )}
        </footer>
      )}
    </blockquote>
  );
}
