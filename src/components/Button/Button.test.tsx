import {
  describe,
  expect,
  it,
  render,
  screen,
  userEvent,
  vi,
} from "../../test";
import { Button } from "./Button";

const onClick = vi.fn();
const onFocus = vi.fn();
const onBlur = vi.fn();

const element = (
  <Button
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="button"
  >
    Button
  </Button>
);

describe("Button", async () => {
  it("should render the button", () => {
    render(element);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should call the callbacks", async () => {
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(element);
    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(button);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onFocus.mock.calls.length).toBe(1);

    button.blur();
    expect(onBlur.mock.calls.length).toBe(1);

    button.focus();
    expect(onFocus.mock.calls.length).toBe(2);

    await userEvent.type(button, "{space}");
    expect(onClick.mock.calls.length).toBe(2);
  });
});
