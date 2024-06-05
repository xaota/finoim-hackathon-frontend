import type { FC, ChangeEventHandler } from "react";
import { useCallback, useEffect, useState } from "react";
import Field from "./Field";
import type { FieldProps, FieldsetProps } from "../types/field";

type PasswordProps = FieldProps & FieldsetProps;

const Password: FC<PasswordProps> = props => {
  const { value, onChange, placeholder, required } = props;
  const { label, description, error, status } = props;

  const [locked, setLocked] = useState(true);
  const toggleLocked = useCallback(() => setLocked(!locked), [locked]);

  const changeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    const value = event.currentTarget.value;
    onChange(value);
    if (value.length === 0) setLocked(true);
  }, [onChange]);

  useEffect(() => {
    if (locked) return;
    const timer = setTimeout(() => setLocked(true), 5000);
    return () => clearTimeout(timer);
  }, [locked]);

  return (
    <Field
      label={label}
      error={error}
      status={status}
      description={description}
      required={required}
    >
      <div className="password">
        <input
          type={locked ? "password" : "text"}
          value={value}
          onChange={changeHandler}
          onBlur={() => setLocked(true)}
          placeholder={placeholder}
          required={required}
        />
        <span
          className="password-lock"
          onClick={toggleLocked}
        >
          {locked ? "🔒" : "🔓"}
        </span>
      </div>
    </Field>
  );
};

export default Password;
