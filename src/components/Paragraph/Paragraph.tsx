import { ReactNode } from "react";
import { cn } from "../../utils/css";

export type ParagraphProps = {
  /**
   * Paragraph content.
   */
  children?: ReactNode;
};

const className = cn("paragraph");

/**
 * Display a text paragraph.
 */
export function Paragraph({ children }: ParagraphProps) {
  return <p className={className}>{children}</p>;
}
