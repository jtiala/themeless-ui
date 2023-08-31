import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
  userEvent,
  vi,
} from "../../../test";
import { Input } from "./Input";

const onChange = vi.fn();
const onClick = vi.fn();
const onFocus = vi.fn();
const onBlur = vi.fn();

const defaultInput = (
  <Input
    onChange={() => onChange()}
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="input"
  />
);

const disabledInput = (
  <Input
    disabled
    onChange={() => onChange()}
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="input"
  />
);

const readOnlyInput = (
  <Input
    readOnly
    onChange={() => onChange()}
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="input"
  />
);

describe("Input", async () => {
  it("should render the input", () => {
    expect(componentToJson(renderer.create(defaultInput))).toMatchSnapshot();

    render(defaultInput);
    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
  });

  it("should call the callbacks", async () => {
    onChange.mockReset();
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(defaultInput);
    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(input);
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onFocus.mock.calls.length).toBe(1);

    input.blur();
    expect(onBlur.mock.calls.length).toBe(1);

    input.focus();
    expect(onFocus.mock.calls.length).toBe(2);

    await userEvent.type(input, "test");
    expect(onChange.mock.calls.length).toBe(4);
    expect(input).toHaveValue("test");
  });

  it("shouldn't be possible to access a disabled input", async () => {
    onChange.mockReset();
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(disabledInput);
    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(input);
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);

    input.blur();
    expect(onBlur.mock.calls.length).toBe(0);

    input.focus();
    expect(onFocus.mock.calls.length).toBe(0);

    await userEvent.type(input, "test");
    expect(onChange.mock.calls.length).toBe(0);
  });

  it("shouldn't be possible to change the value of a read only input", async () => {
    onChange.mockReset();
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(readOnlyInput);
    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(input);
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onFocus.mock.calls.length).toBe(1);

    input.blur();
    expect(onBlur.mock.calls.length).toBe(1);

    input.focus();
    expect(onFocus.mock.calls.length).toBe(2);

    await userEvent.type(input, "test");
    expect(onChange.mock.calls.length).toBe(0);
  });
});
