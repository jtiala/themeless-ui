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
  it("should match the snapshot", () => {
    const component = renderer.create(<TypographyExample />);
    expect(componentToJson(component)).toMatchSnapshot();
  });

  it("should render the component", () => {
    render(<TypographyExample />);
    const component = screen.getByTestId("typographyExample");

    expect(component).toBeInTheDocument();
  });
});
