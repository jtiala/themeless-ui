import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { InputHTMLAttributes } from "react";

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  /**
   * Type of the input.
   */
  type?: HTMLInputProps["type"];

  /**
   * Name of the input.
   */
  name?: HTMLInputProps["name"];

  /**
   * Prevent the user from interacting with the input.
   */
  disabled?: HTMLInputProps["disabled"];

  /**
   * Indicates that the user should not be able to edit the value of the input.
   */
  readOnly?: HTMLInputProps["readOnly"];

  /**
   * Indicates that the user must specify a value for the input before the owning form can be submitted.
   */
  required?: HTMLInputProps["required"];

  /**
   * Brief hint for the user as to what kind of information is expected in the input.
   */
  placeholder?: HTMLInputProps["placeholder"];

  /**
   * The value of the input.
   * Use only when using the input as controlled component (state handled by React).
   */
  value?: HTMLInputProps["value"];

  /**
   * Callback to call when the input's value is modified.
   */
  onChange?: HTMLInputProps["onChange"];

  /**
   * Callback to call when the input is clicked.
   */
  onClick?: HTMLInputProps["onClick"];

  /**
   * Callback to call when the input receives focus.
   */
  onFocus?: HTMLInputProps["onFocus"];

  /**
   * Callback to call when the input loses focus.
   */
  onBlur?: HTMLInputProps["onBlur"];
} & CommonComponentProps;

const className = cn("input");

/**
 * Display an input.
 */
export function Input({
  type = "text",
  name,
  disabled,
  readOnly,
  required,
  placeholder,
  value,
  onChange,
  onClick,
  onFocus,
  onBlur,
  id,
  testId,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
      id={id}
      data-testid={testId}
    />
  );
}
