import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { ReactElement, ReactNode, createElement } from "react";
import { ListItem, ListItemProps } from "./ListItem";

type ListType = "ordered" | "unordered";
type ListItemElement = ReactElement<ListItemProps, typeof ListItem>;

export type ListProps = {
  /**
   * Type of the list.
   */
  type?: ListType;

  /**
   * One or more `<List.Item>` elements.
   */
  children?: ListItemElement | ListItemElement[] | ReactNode; // ReactNode is needed for MDXComponents
} & CommonComponentProps;

const className = cn("list");

/**
 * A list of items.
 */
export function List({ type = "unordered", children, id, testId }: ListProps) {
  return createElement(
    type === "ordered" ? "ol" : "ul",

    { className, id, "data-testid": testId },
    children,
  );
}

List.Item = ListItem;
