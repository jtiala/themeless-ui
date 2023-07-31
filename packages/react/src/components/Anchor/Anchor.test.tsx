import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { Anchor } from "./Anchor";

const href = "https://example.com";
const children = "Example.com";

const defaultAnchor = (
  <Anchor testId="anchor" href={href}>
    {children}
  </Anchor>
);

const externalAnchor = (
  <Anchor testId="anchor" href={href} target="_blank">
    {children}
  </Anchor>
);

describe("Anchor", async () => {
  it("should render default anchor", () => {
    expect(componentToJson(renderer.create(defaultAnchor))).toMatchSnapshot();

    render(defaultAnchor);

    const anchor = screen.getByTestId("anchor");
    const linkRelationships = anchor.getAttribute("rel");

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveTextContent(children);
    expect(linkRelationships).toBeFalsy();
  });

  it("should render external anchor", () => {
    expect(componentToJson(renderer.create(externalAnchor))).toMatchSnapshot();

    render(externalAnchor);

    const anchor = screen.getByTestId("anchor");
    const linkRelationships = (anchor.getAttribute("rel") || "").split(" ");

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveTextContent(children);
    expect(anchor).toHaveAttribute("target", "_blank");
    expect(linkRelationships).toContain("noopener");
    expect(linkRelationships).toContain("noreferrer");
  });
});
