import { createElement, ReactNode } from "react";
import { CommonComponentProps } from "../../utils/components";
import { cn } from "../../utils/css";

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
 * Display a section heading.
 */
export function Heading({ level, children, testId, ...rest }: HeadingProps) {
  const element = "h" + level;

  return createElement(
    element,
    { className, ...rest, "data-testid": testId },
    children
  );
}
