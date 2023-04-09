import { ReactNode } from "react";
import { CommonComponentProps } from "../../utils/components";
import { cn } from "../../utils/css";

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
