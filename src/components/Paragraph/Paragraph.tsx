import { ReactNode } from "react";

export type ParagraphProps = {
  /**
   * Paragraph content.
   */
  children: ReactNode;
};

/**
 * Display a text paragraph.
 */
export function Paragraph({ children }: ParagraphProps) {
  return <p>{children}</p>;
}
