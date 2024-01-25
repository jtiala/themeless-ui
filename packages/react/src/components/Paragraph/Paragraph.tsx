import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { ReactNode } from "react";

export type ParagraphProps = {
  /**
   * Paragraph content.
   */
  children?: ReactNode;
} & CommonComponentProps;

const className = cn("paragraph");

/**
 * A paragraph of text.
 */
export function Paragraph({ children, id, testId }: ParagraphProps) {
  return (
    <p className={className} id={id} data-testid={testId}>
      {children}
    </p>
  );
}
