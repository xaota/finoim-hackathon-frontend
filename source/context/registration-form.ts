import { createEvent, createStore, sample, restore } from "effector";
import { countries } from "../script/utils";
import type { CountryData } from "../types/country";

// export const $login = createStore<string>("");
export const changeLogin = createEvent<string>();
export const $login = restore(changeLogin, "");
// sample({ clock: changeLogin, target: $login });

export const $email = createStore<string>("");
export const changeEmail = createEvent<string>();
sample({ clock: changeEmail, target: $email });

export const $phone = createStore<string>("");
export const changePhone = createEvent<string>();
sample({ clock: changePhone, target: $phone });
export const $phonePlaceholder = createStore<string>("");
export const $phoneMask = createStore<string>("");
export const checkPhone = createEvent();

export const $phoneConfirm = createStore<string>("");
export const changePhoneConfirm = createEvent<string>();
sample({ clock: changePhoneConfirm, target: $phoneConfirm });
export const $phoneConfirmShow = createStore<boolean>(false);

sample({
  clock: checkPhone,
  source: $phone,
  fn: phone => phone.length > 1,
  target: $phoneConfirmShow
});

export const $password = createStore<string>("");
export const changePassword = createEvent<string>();
sample({ clock: changePassword, target: $password });

export const $passwordConfirm = createStore<string>("");
export const changePasswordConfirm = createEvent<string>();
sample({ clock: changePasswordConfirm, target: $passwordConfirm });

export const $conditions = createStore<boolean>(false);
export const changeConditions = createEvent<boolean>();
sample({ clock: changeConditions, target: $conditions });

export const $country = createStore<string>("");
export const changeCountry = createEvent<string>();
sample({ clock: changeCountry, target: $country });

const $selectedCountry = createStore<CountryData>({} as CountryData);

sample({
  clock: $country,
  filter: Boolean,
  fn: country => countries.find(c => c.iso2 === country),
  target: $selectedCountry
});

sample({
  clock: $selectedCountry,
  source: $phone,
  filter: (phone, country) => Boolean(country.dial) && !phone.startsWith(country.dial),
  fn: (_, country) => country.dial,
  target: changePhone
});

sample({
  clock: $selectedCountry,
  filter: country => Boolean(country.dial),
  fn: country => country.dial + " " + country.mask[0],
  target: $phonePlaceholder
});

// sample({
//   clock: $selectedCountry,
//   filter: country => Boolean(country.dial),
//   fn: country => country.dial + " " + country.mask[0].replaceAll("#", "_"),
//   target: $phoneMask
// });

const clearPhone = (value: string): string => value.replace(/((?!^)\+)|[a-zA-Z]/gm, "");
const applyMask = (mask: string, value: string): { count: number, result: string, mask: string, max: number, error: number } => {
  let result = "";
  let count = 0;
  let error = -1;
  const max = Math.min(mask.length, value.length);
  for (let i = 0; i < max; i++) {
    const maskChar = mask[i];
    const valueChar = value[i];
    if (maskChar === valueChar || maskChar === "#" || maskChar === "_") {
      result += valueChar;
      count++;
    } else {
      result += mask.slice(i);
      error = i;
      break;
    }
  }
  return { count, result, mask, max, error };
}

sample({
  clock: changePhone,
  source: $selectedCountry,
  filter: country => Boolean(country.dial),
  fn: (country, phone) => {
    const masks = country.mask.map(mask => country.dial + " " + mask.replaceAll("#", "_"));
    const clean = clearPhone(phone);
    const parced = masks.map(mask => applyMask(mask, clean));
    const mask = parced.reduce((mask, p) => p.count > mask.count ? p : mask, parced[0]).result;
    // const mask = masks.find(mask => clearPhone(mask).startsWith(clean)) || masks[0]; // !
    console.log(phone, "->", clean, { mask });
    parced.forEach(p => console.log(p.mask, "->", p.count, "/" , p.max, ":", p.result, p.error));
    return mask;
  },
  target: $phoneMask
});


