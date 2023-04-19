import {
  cleanup,
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../test";
import { Heading } from "./Heading";

const element = (
  <Heading level={1} testId="heading">
    Lorem ipsum dolor sit amet.
  </Heading>
);

describe("Heading", async () => {
  it("should match the snapshot", () => {
    const component = renderer.create(element);
    expect(componentToJson(component)).toMatchSnapshot();
  });

  it("should render the heading", () => {
    render(element);
    const heading = screen.getByTestId("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Lorem ipsum dolor sit amet.");
  });

  it("should render correct html element", () => {
    const levels = [1, 2, 3, 4, 5, 6] as const;

    levels.forEach((level) => {
      cleanup();
      render(
        <Heading level={level} testId="heading">
          Heading {level}
        </Heading>
      );

      const heading = screen.getByTestId("heading");
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(`Heading ${level}`);
      expect(heading.tagName.toLowerCase()).toBe(`h${level}`);
    });
  });
});
