import {
  cleanup,
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { Text, TextProps } from "./Text";

const element = <Text testId="text">Lorem ipsum dolor sit amet.</Text>;

describe("Text", async () => {
  it("should match the snapshot", () => {
    const component = renderer.create(element);
    expect(componentToJson(component)).toMatchSnapshot();
  });

  it("should render the text", () => {
    render(element);
    const text = screen.getByTestId("text");

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Lorem ipsum dolor sit amet.");
    expect(text.tagName.toLowerCase()).toBe("span");
  });

  it("should render correct html element", () => {
    const types: NonNullable<TextProps["type"]>[] = [
      "abbr",
      "b",
      "cite",
      "code",
      "del",
      "em",
      "i",
      "ins",
      "kbd",
      "mark",
      "q",
      "s",
      "samp",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "u",
      "var",
    ];

    types.forEach((type) => {
      cleanup();
      render(
        <Text type={type} testId="text">
          {type}
        </Text>,
      );

      const text = screen.getByTestId("text");
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent(type);
      expect(text.tagName.toLowerCase()).toBe(type);
    });
  });
});
