import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { ReactNode } from "react";

export type ProseProps = {
  /**
   * Prose content.
   */
  children?: ReactNode;
} & CommonComponentProps;

const className = cn("prose");

/**
 * A wrapper component for text content. Adds default spacing for the following components:
 * - `<Blockquote>`
 * - `<Heading>`
 * - `<List>`
 * - `<Paragraph>`
 */
export function Prose({ children, id, testId }: ProseProps) {
  return (
    <div className={className} id={id} data-testid={testId}>
      {children}
    </div>
  );
}
