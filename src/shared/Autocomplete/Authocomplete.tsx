import { useCallback } from 'react';
import {
  FieldError,
	FieldPath,
	FieldValues,
	Path,
	PathValue,
	UseFormSetValue,
} from 'react-hook-form';
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { getOption } from '../../utils';
import { Option } from '../../types';
import { DEFAULT_AUTOCOMPLETE_ID } from '../../constants/common';

type AutocompleteProps<T extends FieldValues> = {
  name: FieldPath<T>,
  options: Option[],
  value: string | number | null | undefined,
  defaultValue?: Option,
  setValue: UseFormSetValue<T>,
  error: FieldError | undefined,
  label: string,
  disabled?: boolean,
  disableClearable?: boolean,
}

export const Autocomplete = <T extends FieldValues, > ({
  name,
  options = [],
  value,
  setValue,
  error,
  label,
  defaultValue,
  disabled = false,
  disableClearable = false,
}: AutocompleteProps<T>): JSX.Element => {
  const handleChangeSelectValue = useCallback((
    _: any,
    data: Option<string | number> | null,
  ): void => {
    const newValue = typeof data?.value !== 'undefined' ? data?.value : DEFAULT_AUTOCOMPLETE_ID;
    setValue(name, newValue as PathValue<T, Path<T>>);
  }, [name, setValue]);

  const isValue = value !== null && value !== undefined;

  return isValue ? (
    <MuiAutocomplete
      autoComplete={false}
      disableClearable={disableClearable}
      fullWidth
      value={getOption<number | string>(options, value)}
      defaultValue={defaultValue}
      options={options}
      onChange={handleChangeSelectValue}
      getOptionLabel={(option: Option): string => option.label}
      disabled={disabled}
      renderInput={(params): JSX.Element => (
        <TextField
          {...params}
          label={label}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  ) : (<></>);
};
