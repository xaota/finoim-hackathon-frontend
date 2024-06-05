import { reflect } from '@effector/reflect';
import {
  $login, changeLogin,
  $email, changeEmail,
  $phone, changePhone, $phonePlaceholder, checkPhone, $phoneMask,
  $phoneConfirm, changePhoneConfirm,
  $password, changePassword,
  $passwordConfirm, changePasswordConfirm,
  $conditions, changeConditions,
  $country, changeCountry
} from '../context/registration-form';
import { $countries } from "../context/countries";

import Input from '../form/Input';
import Select from "../form/Select";
import Password from "../form/Password";
import Checkbox from "../form/Checkbox";
import Button from '../form/Button';

// поля формы и биндинг данных

export const LoginField = reflect({
  view: Input,
  bind: {
    label: "Логин",
    value: $login,
    placeholder: "имя пользователя",
    onChange: changeLogin,
    required: true
  },
});

export const EMailField = reflect({
  view: Input,
  bind: {
    label: "Электронная почта",
    value: $email,
    placeholder: "mail@example.com",
    onChange: changeEmail,
    required: true,
    type: "email"
  },
});

export const CountryField = reflect({
  view: Select,
  bind: {
    label: "Страна",
    value: $country,
    placeholder: "Выберите страну",
    options: $countries,
    onChange: changeCountry,
    required: true
  }
});

export const PhoneField = reflect({
  view: Input,
  bind: {
    label: "Телефон",
    value: $phone,
    placeholder: $phonePlaceholder,
    onChange: changePhone,
    required: true,
    type: "tel",
    onBlur: checkPhone,
    mask: $phoneMask
  }
});

export const PhoneConfirmField = reflect({
  view: Input,
  bind: {
    label: "Код подтверждения",
    value: $phoneConfirm,
    placeholder: "0000",
    onChange: changePhoneConfirm,
    required: true
  }
});

export const PasswordField = reflect({
  view: Password,
  bind: {
    label: "Пароль",
    value: $password,
    placeholder: "password",
    onChange: changePassword,
    required: true
  }
});

export const PasswordConfirmField = reflect({
  view: Password,
  bind: {
    label: "Подтверждение пароля",
    value: $passwordConfirm,
    placeholder: "password",
    onChange: changePasswordConfirm,
    required: true
  }
});

export const ConditionsCheckboxField = reflect({
  view: Checkbox,
  bind: {
    label: "Я согласен с условиями",
    value: $conditions,
    onChange: changeConditions,
    required: true
  }
});

export const SubmitButton = reflect({
  view: Button,
  bind: {
    title: "Зарегистрироваться",
    // onClick: () => { alert(123) }
  },
});
