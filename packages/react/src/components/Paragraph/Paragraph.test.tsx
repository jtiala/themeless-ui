import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { Paragraph } from "./Paragraph";

const defaultParagaph = (
  <Paragraph testId="paragraph">Lorem ipsum dolor sit amet.</Paragraph>
);

describe("Paragraph", async () => {
  it("should render the paragraph", () => {
    expect(componentToJson(renderer.create(defaultParagaph))).toMatchSnapshot();

    render(defaultParagaph);

    const paragraph = screen.getByTestId("paragraph");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Lorem ipsum dolor sit amet.");
  });
});
