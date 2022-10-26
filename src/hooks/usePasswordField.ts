import { useState } from 'react';

type UsePasswordField = {
    isShowPassword: boolean,
    togglePasswordVisibility: () => void,
}

export const usePasswordField = (): UsePasswordField => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => setIsShowPassword((prevState) => !prevState);
  return {
    isShowPassword,
    togglePasswordVisibility,
  };
};
