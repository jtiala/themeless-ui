import "@testing-library/jest-dom/vitest";
import {
  cleanup,
  render,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  cleanup();
});

function customRender(
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult {
  return render(ui, {
    // wrap providers here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { default as renderer } from "react-test-renderer";
export {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  customRender as render,
  vi,
};
