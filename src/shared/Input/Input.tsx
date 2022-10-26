import React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FieldError } from 'react-hook-form';
import { usePasswordField } from '../../hooks';
import { InputTypes } from '../../types';
import { Iconify } from '../../shared';
import { InputProps as StandardInputProps } from "@mui/material/Input/Input";
import { InputBaseProps } from "@mui/material/InputBase";

type InputProps = {
	onBlur?: InputBaseProps['onBlur'],
  onChange: StandardInputProps['onChange'],
  value: string,
  error?: FieldError,
  label: string,
  type?: 'text' | 'password'
}

export const Input:React.FC<InputProps> = ({
  onBlur, onChange, value, error, label = 'New password', type = InputTypes.TEXT,
}): JSX.Element => {
  const { isShowPassword, togglePasswordVisibility } = usePasswordField();
  return (
    <>
      {/* fake input for disabling autocomplete */}
      <input type="password" name="fake-password" autoComplete="new-password" style={{ display: 'none' }} />
      <TextField
        autoComplete="new-password"
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        fullWidth
        type={type}
        label={label}
        error={!!error}
        helperText={error?.message}
        {...(type === InputTypes.PASSWORD && {
          InputProps: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  <Iconify icon={isShowPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          },
        })
      }
      />
    </>
  );
};
