import { CommonComponentProps } from "@themeless-ui/utils";
import { ReactNode } from "react";

export type ListItemProps = {
  /**
   * List item content.
   */
  children?: ReactNode;
} & CommonComponentProps;

/**
 * A list item.
 */
export function ListItem({ children, id, testId }: ListItemProps) {
  return (
    <li id={id} data-testid={testId}>
      {children}
    </li>
  );
}
