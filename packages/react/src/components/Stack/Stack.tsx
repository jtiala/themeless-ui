import { CommonComponentProps, cn, cns } from "@themeless-ui/utils";
import { ReactNode } from "react";

export type StackProps = {
  /**
   * The direction to stack the elements.
   */
  direction?: "vertical" | "horizontal";

  /**
   * The elements to be stacked.
   */
  children?: ReactNode;
} & CommonComponentProps;

const stackClassName = cn("stack");
const verticalClassName = cn("stack-vertical");
const horizontalClassName = cn("stack-horizontal");

/**
 * Display a stack of items.
 */
export function Stack({
  direction = "vertical",
  children,
  id,
  testId,
}: StackProps) {
  const classNames = cns(stackClassName, {
    [verticalClassName]: direction === "vertical",
    [horizontalClassName]: direction === "horizontal",
  });

  return (
    <div className={classNames} id={id} data-testid={testId}>
      {children}
    </div>
  );
}
