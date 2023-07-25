import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { TypographyExample } from "./TypographyExample";

describe("TypographyExample", async () => {
  it("should render the example", () => {
    expect(
      componentToJson(renderer.create(<TypographyExample />)),
    ).toMatchSnapshot();

    render(<TypographyExample />);

    const component = screen.getByTestId("typographyExample");

    expect(component).toBeInTheDocument();
  });
});
