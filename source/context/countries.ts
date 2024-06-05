import { createStore } from 'effector';
import { emojiFlag, isWindows, countries } from '../script/utils';
import type { OptionProps } from '../types/field';
import type { CountryISO } from "../types/country";

const windows = isWindows();

export const $countries = createStore<Array<OptionProps<CountryISO>>>(
  countries
    .filter(c => Boolean(c.dial))
    .map(c => ({
      value: c.iso2,
      label: windows ? c.ru : emojiFlag(c.iso2) + " " + c.ru
    }))
);
