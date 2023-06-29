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
 * Display a text paragraph.
 */
export function Paragraph({ children, testId }: ParagraphProps) {
  return (
    <p className={className} data-testid={testId}>
      {children}
    </p>
  );
}
