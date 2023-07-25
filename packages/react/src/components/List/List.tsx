import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { ReactElement, createElement } from "react";
import { ListItem, ListItemProps } from "./ListItem";

type ListType = "ordered" | "unordered";
type ListItemElement = ReactElement<ListItemProps, typeof ListItem>;

export type ListProps = {
  /**
   * Type of the list.
   *
   * @default unordered
   */
  type?: ListType;

  /**
   * One or more <List.Item> elements.
   */
  children?: ListItemElement | ListItemElement[];
} & CommonComponentProps;

const className = cn("list");

/**
 * Display a list of items.
 */
export function List({ type, children, testId }: ListProps) {
  const element = type === "ordered" ? "ol" : "ul";

  return createElement(element, { className, "data-testid": testId }, children);
}

List.Item = ListItem;
