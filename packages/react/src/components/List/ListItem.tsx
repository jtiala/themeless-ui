import { CommonComponentProps } from "@themeless-ui/utils";
import { ReactNode } from "react";

export type ListItemProps = {
  /**
   * List item content.
   */
  children?: ReactNode;
} & CommonComponentProps;

/**
 * Display a text ListItem.
 */
export function ListItem({ children, testId }: ListItemProps) {
  return <li data-testid={testId}>{children}</li>;
}
