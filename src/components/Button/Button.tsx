import { HTMLAttributes } from "react";

type HTMLButtonProps = HTMLAttributes<HTMLButtonElement>;

export interface ButtonProps {
  /**
   * Button content.
   */
  children: HTMLButtonProps["children"];

  /**
   * Callback to call when the button is clicked.
   */
  onClick?: HTMLButtonProps["onClick"];
}

/**
 * A clickable UI element commonly used to trigger actions, such as submitting a form.
 */
export function Button(props: ButtonProps) {
  return <button {...props} />;
}
