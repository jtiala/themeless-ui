import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { Paragraph } from "../Paragraph";
import { Blockquote } from "./Blockquote";

const cite = "https://source-of-the-quote.example.com";
const author = "Samuel L. Ipsum";
const source = "Lorem Ipsum";
const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";
const children = <Paragraph>{lipsum}</Paragraph>;

const defaultBlockquote = (
  <Blockquote testId="blockquote" cite={cite} author={author} source={source}>
    {children}
  </Blockquote>
);

const blockquoteWithoutSource = (
  <Blockquote testId="blockquote" cite={cite} author={author}>
    {children}
  </Blockquote>
);

const blockquoteWithoutAuthor = (
  <Blockquote testId="blockquote" cite={cite} source={source}>
    {children}
  </Blockquote>
);

describe("Blockquote", async () => {
  it("should render default blockquote", () => {
    expect(
      componentToJson(renderer.create(defaultBlockquote)),
    ).toMatchSnapshot();

    render(defaultBlockquote);

    const blockquote = screen.getByTestId("blockquote");
    const footer = blockquote.querySelector("footer");

    expect(blockquote).toBeInTheDocument();
    expect(blockquote).toHaveTextContent(lipsum);
    expect(blockquote).toHaveAttribute("cite", cite);
    expect(footer?.textContent).toBe(`—${author}, ${source}`);
  });

  it("should render author without source", () => {
    expect(
      componentToJson(renderer.create(blockquoteWithoutSource)),
    ).toMatchSnapshot();

    render(blockquoteWithoutSource);

    const blockquote = screen.getByTestId("blockquote");
    const footer = blockquote.querySelector("footer");

    expect(footer?.textContent).toBe(`—${author}`);
  });

  it("should render source without author", () => {
    expect(
      componentToJson(renderer.create(blockquoteWithoutAuthor)),
    ).toMatchSnapshot();

    render(blockquoteWithoutAuthor);

    const blockquote = screen.getByTestId("blockquote");
    const footer = blockquote.querySelector("footer");

    expect(footer?.textContent).toBe(source);
  });
});
