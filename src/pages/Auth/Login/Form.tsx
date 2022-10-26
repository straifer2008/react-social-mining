import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Link, Stack } from "@mui/material";
import { Input } from 'shared';
import ROUTES from 'router/routes';
import { useLoginMutation } from 'services';
import { useServerError, useSetTokenToStorage } from 'hooks';
import { FormConfigItem, InputTypes, LoginFormValues } from "types";
import rules from './rules';

const CONFIG: readonly FormConfigItem<'email' | 'password'>[] = [{
	name: 'email',
	label: 'Email address',
	type: InputTypes.TEXT,
},
	{
		name: 'password',
		label: 'Password',
		type: InputTypes.PASSWORD,
	}] as const;

export const Form: React.FC = (): JSX.Element => {
  const form = useForm<LoginFormValues>({
    resolver: yupResolver(rules),
    defaultValues: {
	    email: '',
	    password: ''
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = form;

  const [login, { data: result, isError, error: serverError }] = useLoginMutation();

  const onSubmit = (data: LoginFormValues): void => {
    login(data);
  };

  useSetTokenToStorage({ result });

  useServerError({ isError, error: serverError });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {CONFIG.map(({ name, label, type }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            defaultValue=""
            render={({
              field: { onBlur, onChange, value }, fieldState: { error },
            }): JSX.Element => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={error}
                label={label}
                type={type}
              />
            )}
          />
        ))}
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link component={RouterLink} variant="subtitle2" underline="hover" to={ROUTES.AUTH.FORGOT_PASSWORD}>
          Forgot password?
        </Link>
      </Stack>
	    <Button size="large" type="submit" variant="contained" disabled={isSubmitting}>
		    Login
	    </Button>
    </form>
  );
};
