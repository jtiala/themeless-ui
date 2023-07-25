import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { List } from "./List";

const items = [
  <List.Item key="1">Lorem ipsum</List.Item>,
  <List.Item key="2">Dolor sit amet</List.Item>,
  <List.Item key="3">Consectetur adipiscing elit</List.Item>,
];

const elementUnordered = <List testId="list">{items}</List>;
const elementOrdered = (
  <List type="ordered" testId="list">
    {items}
  </List>
);

describe("List", async () => {
  it("should render unordered list", () => {
    expect(
      componentToJson(renderer.create(elementUnordered)),
    ).toMatchSnapshot();

    render(elementUnordered);

    const list = screen.getByTestId("list");
    const listItems = list.querySelectorAll("li");

    expect(list).toBeInTheDocument();
    expect(list.tagName.toLowerCase()).toBe("ul");
    expect(listItems.length).toBe(3);
    expect(listItems[0]).toHaveTextContent("Lorem ipsum");
    expect(listItems[1]).toHaveTextContent("Dolor sit amet");
    expect(listItems[2]).toHaveTextContent("Consectetur adipiscing elit");
  });

  it("should render ordered list", () => {
    expect(componentToJson(renderer.create(elementOrdered))).toMatchSnapshot();

    render(elementOrdered);

    const list = screen.getByTestId("list");

    expect(list).toBeInTheDocument();
    expect(list.tagName.toLowerCase()).toBe("ol");
  });
});
