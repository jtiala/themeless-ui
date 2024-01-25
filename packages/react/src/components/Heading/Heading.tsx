import { cn, CommonComponentProps } from "@themeless-ui/utils";
import { createElement, ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  /**
   * The level of the heading.
   */
  level: HeadingLevel;

  /**
   * Heading content.
   */
  children?: ReactNode;
} & CommonComponentProps;

const className = cn("heading");

/**
 * A heading.
 */
export function Heading({ level, children, id, testId }: HeadingProps) {
  return createElement(
    `h${level}`,
    { className, id, "data-testid": testId },
    children,
  );
}
