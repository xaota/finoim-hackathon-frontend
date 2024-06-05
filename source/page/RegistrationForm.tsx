import type { FC } from "react";
import { useUnit } from "effector-react";
import { $phoneConfirmShow } from "../context/registration-form";
import {
  LoginField,
  EMailField,
  CountryField,
  PhoneField,
  PhoneConfirmField,
  PasswordField,
  PasswordConfirmField,
  ConditionsCheckboxField,
  SubmitButton
} from "../reflect/registration-form-fields"

/** Пример формы регистрации */
const RegistrationForm: FC = () => {
  const phoneConfirmShow = useUnit($phoneConfirmShow);

  return (
    <section id="registration-form">
      <h1>Форма регистрации</h1>

      <form>
        <LoginField />
        <EMailField />
        <CountryField />
        <div className="field-phone">
          <PhoneField />
          {phoneConfirmShow && <PhoneConfirmField />}
        </div>
        <PasswordField />
        <PasswordConfirmField />
        <ConditionsCheckboxField />
        <SubmitButton />
      </form>

      <output></output>

      <footer>
        <h2>Описание задания</h2>

      </footer>
    </section>
  );
};

export default RegistrationForm;
