import { describe, expect, it, render, screen } from "../../test";
import { Paragraph } from "./Paragraph";

const element = (
  <Paragraph testId="paragraph">Lorem ipsum dolor sit amet.</Paragraph>
);

describe("Paragraph", async () => {
  it("should render the paragraph", () => {
    render(element);
    const paragraph = screen.getByTestId("paragraph");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Lorem ipsum dolor sit amet.");
  });
});
