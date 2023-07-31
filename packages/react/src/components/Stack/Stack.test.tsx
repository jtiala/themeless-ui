import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { Stack } from "./Stack";

const defaultStack = (
  <Stack testId="stack">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Stack>
);

describe("Stack", async () => {
  it("should render the stack", () => {
    expect(componentToJson(renderer.create(defaultStack))).toMatchSnapshot();

    render(defaultStack);

    const stack = screen.getByTestId("stack");
    const stackedElements = stack.getElementsByTagName("div");

    expect(stack).toBeInTheDocument();
    expect(stackedElements.length).toBe(3);
  });
});
