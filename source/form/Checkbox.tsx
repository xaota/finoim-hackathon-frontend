import type { FC, ChangeEventHandler } from "react";
import { useCallback } from "react";
import Field from "./Field";
import type { FieldProps, FieldsetProps } from "../types/field";

type CheckboxProps = FieldProps<boolean> & FieldsetProps;

const Checkbox: FC<CheckboxProps> = props => {
  const { value, onChange, placeholder, required } = props;
  const { label, description, error, status } = props;

  const changeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    const value = event.currentTarget.checked;
    onChange(value);
  }, [onChange]);

  return (
    <Field
      error={error}
      status={status}
      description={description}
      required={required}
    >
      <label className="checkbox" role="checkbox" aria-checked={value} tabIndex={0}>
        <input
          type="checkbox"
          checked={value}
          onChange={changeHandler}
          placeholder={placeholder}
          required={required}
        />
        {label}
      </label>
    </Field>
  );
};

export default Checkbox;
