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
import { Textarea } from "./Textarea";

const onChange = vi.fn();
const onClick = vi.fn();
const onFocus = vi.fn();
const onBlur = vi.fn();

const defaultTextarea = (
  <Textarea
    onChange={() => onChange()}
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="textarea"
  />
);

const disabledTextarea = (
  <Textarea
    disabled
    onChange={() => onChange()}
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="textarea"
  />
);

const readOnlyTextarea = (
  <Textarea
    readOnly
    onChange={() => onChange()}
    onClick={() => onClick()}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    testId="textarea"
  />
);

describe("Textarea", async () => {
  it("should render the textarea", () => {
    expect(componentToJson(renderer.create(defaultTextarea))).toMatchSnapshot();

    render(defaultTextarea);
    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
  });

  it("should call the callbacks", async () => {
    onChange.mockReset();
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(defaultTextarea);
    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(textarea);
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onFocus.mock.calls.length).toBe(1);

    textarea.blur();
    expect(onBlur.mock.calls.length).toBe(1);

    textarea.focus();
    expect(onFocus.mock.calls.length).toBe(2);

    await userEvent.type(textarea, "test{enter}test");
    expect(onChange.mock.calls.length).toBe(9);
    expect(textarea).toHaveValue("test\ntest");
  });

  it("shouldn't be possible to access a disabled textarea", async () => {
    onChange.mockReset();
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(disabledTextarea);
    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(textarea);
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);

    textarea.blur();
    expect(onBlur.mock.calls.length).toBe(0);

    textarea.focus();
    expect(onFocus.mock.calls.length).toBe(0);

    await userEvent.type(textarea, "test{enter}test");
    expect(onChange.mock.calls.length).toBe(0);
  });

  it("shouldn't be possible to change the value of a read only textarea", async () => {
    onChange.mockReset();
    onClick.mockReset();
    onFocus.mockReset();
    onBlur.mockReset();

    render(readOnlyTextarea);
    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFocus.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);

    await userEvent.click(textarea);
    expect(onChange.mock.calls.length).toBe(0);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onFocus.mock.calls.length).toBe(1);

    textarea.blur();
    expect(onBlur.mock.calls.length).toBe(1);

    textarea.focus();
    expect(onFocus.mock.calls.length).toBe(2);

    await userEvent.type(textarea, "test{enter}test");
    expect(onChange.mock.calls.length).toBe(0);
  });
});
