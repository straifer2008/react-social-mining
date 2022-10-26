import {
  Controller, FieldPath, FieldValues, UseFormSetValue, Control,
} from 'react-hook-form';
import { ElementTypes, InputTypes, Option } from '../../types';
import { Autocomplete } from '../Autocomplete';
import { TextField } from "@mui/material";

type FormFieldProps<T extends FieldValues> = {
  name: FieldPath<T>,
  options?: Option[],
  setValue?: UseFormSetValue<T>,
  label: string,
  type?: InputTypes,
  elementType?: ElementTypes,
  control: Control<T>
}

export const FormField = <T extends FieldValues, > ({
  name, control, elementType, options = [], setValue, label, type,
}: FormFieldProps<T>): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({
      field: { onBlur, onChange, value = '' },
      fieldState: { error },
    }): JSX.Element => {
      if (elementType === ElementTypes.AUTOCOMPLETE) {
        return (
          <Autocomplete<T>
            disableClearable
            value={value as number | string}
            options={options}
            name={name}
            setValue={setValue as UseFormSetValue<T>}
            error={error}
            label={label}
          />
        );
      }
      return (
        <TextField
          fullWidth
          label={label}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          error={!!error}
          helperText={error?.message}
        />
      );
    }}
  />
  );
