import { Option } from '../types';

type SelectedOption<X> = | Option<X> | undefined

export function getOption<T>(options: Option<T>[], value?: T | null): SelectedOption<T> {
  return options.find((option: Option<T>) => option.value === value);
}
