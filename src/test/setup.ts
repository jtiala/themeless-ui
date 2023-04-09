import "@testing-library/jest-dom";
import matchers from "@testing-library/jest-dom/matchers";
import {
  cleanup,
  render,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

function customRender(
  ui: React.ReactElement,
  options: RenderOptions = {}
): RenderResult {
  return render(ui, {
    // wrap providers here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export {
  customRender as render,
  expect,
  beforeEach,
  afterEach,
  describe,
  it,
  vi,
};
