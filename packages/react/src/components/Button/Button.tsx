import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * Type of the button.
   */
  type?: HTMLButtonProps["type"];

  /**
   * Name of the button.
   */
  name?: HTMLButtonProps["name"];

  /**
   * Prevents the user from interacting with the button: it cannot be pressed or focused.
   */
  disabled?: HTMLButtonProps["disabled"];

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

  /**
   * Button content.
   */
  children: ReactNode;
} & CommonComponentProps;

const className = cn("button");

/**
 * A clickable UI element commonly used to trigger actions, such as submitting a form.
 */
export function Button({
  type = "button",
  name,
  disabled,
  onClick,
  onFocus,
  onBlur,
  children,
  id,
  testId,
}: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
      id={id}
      data-testid={testId}
    >
      {children}
    </button>
  );
}
