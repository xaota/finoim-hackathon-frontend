import type { FC, ChangeEventHandler } from "react";
import { Children, useCallback } from "react";
import Field from "./Field";
import type { FieldProps, FieldsetProps, OptionProps } from "../types/field";

type SelectProps = FieldProps<string> & FieldsetProps & { options: Array<OptionProps> };

const Select: FC<SelectProps> = props => {
  const { value, onChange, placeholder, required, options = [] } = props;
  const { label, description, error, status } = props;

  const changeHandler = useCallback<ChangeEventHandler<HTMLSelectElement>>(event => {
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
      <select
        defaultValue={value}
        onChange={changeHandler}
        required={required}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {Children.toArray(options.map(({ value, label }) => <option value={value}>{label}</option>))}
      </select>
    </Field>
  );
};

export default Select;
