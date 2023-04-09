import { ButtonHTMLAttributes, ReactNode } from "react";
import { CommonComponentProps } from "../../utils/components";

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * Button content.
   */
  children: ReactNode;

  /**
   * Type of the button.
   */
  type?: HTMLButtonProps["type"];

  /**
   * Callback to call when the button is clicked.
   */
  onClick?: HTMLButtonProps["onClick"];

  /**
   * Callback to call when the button receives focus.
   */
  onFocus?: HTMLButtonProps["onFocus"];

  /**
   * Callback to call when the button loses focus.
   */
  onBlur?: HTMLButtonProps["onBlur"];
} & CommonComponentProps;

/**
 * A clickable UI element commonly used to trigger actions, such as submitting a form.
 */
export function Button({ type = "button", testId, ...rest }: ButtonProps) {
  return <button type={type} {...rest} data-testid={testId} />;
}
