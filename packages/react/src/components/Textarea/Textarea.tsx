import { CommonComponentProps, cn } from "@themeless-ui/utils";
import { TextareaHTMLAttributes } from "react";

type HTMLTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextareaProps = {
  /**
   * Name of the textarea.
   */
  name?: HTMLTextareaProps["name"];

  /**
   * Brief hint for the user as to what kind of information is expected in the textarea.
   */
  placeholder?: HTMLTextareaProps["placeholder"];

  /**
   * The value of the textarea.
   * Use only when using the textarea as controlled component (state handled by React).
   */
  value?: HTMLTextareaProps["value"];

  /**
   * Prevent the user from interacting with the textarea.
   */
  disabled?: HTMLTextareaProps["disabled"];

  /**
   * Indicates that the user should not be able to edit the value of the textarea.
   */
  readOnly?: HTMLTextareaProps["readOnly"];

  /**
   * Indicates that the user must specify a value for the textarea before the owning form can be submitted.
   */
  required?: HTMLTextareaProps["required"];

  /**
   * Callback to call when the textarea's value is modified.
   */
  onChange?: HTMLTextareaProps["onChange"];

  /**
   * Callback to call when the textarea is clicked.
   */
  onClick?: HTMLTextareaProps["onClick"];

  /**
   * Callback to call when the textarea receives focus.
   */
  onFocus?: HTMLTextareaProps["onFocus"];

  /**
   * Callback to call when the textarea loses focus.
   */
  onBlur?: HTMLTextareaProps["onBlur"];
} & CommonComponentProps;

const className = cn("textarea");

/**
 * Display an textarea.
 */
export function Textarea({
  name,
  placeholder,
  value,
  disabled,
  readOnly,
  required,
  onChange,
  onClick,
  onFocus,
  onBlur,
  id,
  testId,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
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
