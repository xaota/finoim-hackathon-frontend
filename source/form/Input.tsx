import type { FC, ChangeEventHandler } from "react";
import { useCallback } from "react";
import Field from "./Field";
import type { FieldProps, FieldsetProps } from "../types/field";

type InputProps = FieldProps & FieldsetProps & {
  type?: "text" | "email" | "tel";
  mask?: string;
};

const Input: FC<InputProps> = props => {
  const { value, onChange, onBlur, placeholder, required, type = "text", mask } = props;
  const { label, description, error, status } = props;

  const changeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    const value = event.currentTarget.value;
    onChange(value);
  }, [onChange]);

  return (
    <Field
      label={label}
      error={error}
      status={status}
      description={description}
      required={required}
    >
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
      />
      {Boolean(mask) && <div className="field-mask">{mask}</div>}
    </Field>
  );
};

export default Input;
