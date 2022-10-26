import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AccessTokenResponse } from 'types';
import { setTokenToStorage } from 'utils';
import ROUTES from 'router/routes';

type UseSetTokenToStorageProps = {
  result: AccessTokenResponse | undefined
}

export const useSetTokenToStorage = ({ result }: UseSetTokenToStorageProps): void => {
  const navigate = useNavigate();

  useEffect(() => {
    if (result?.accessToken) {
      setTokenToStorage(result.accessToken);
      navigate(ROUTES.ROOT);
    }
  }, [result]);
};
