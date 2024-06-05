import type { ReactNode, FocusEvent } from "react";

export type FieldProps<T = string> = {
  value: T;
  onChange: (value: T) => void;
  onBlur?: (event: FocusEvent) => void;

  label: string;
  placeholder?: string;

  required?: boolean;
}

export type FieldStatus = "normal" | "warning" | "process" | "danger" | "success" | "accent";

export type FieldState = "normal" | "validating" | "loading";

export type FieldsetProps = {
  label?: string;
  error?: string;
  status?: FieldStatus;
  required?: boolean;
  description?: ReactNode;
};

export type OptionProps<T = string> = {
  value: T;
  label: string;
}
