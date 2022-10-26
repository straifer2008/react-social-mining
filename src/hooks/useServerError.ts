import { useEffect } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { getErrorMessage } from 'utils';
import { ErrorResponse } from 'types';

type UseServerErrorProps = {
    isError?: boolean,
    error?: FetchBaseQueryError | SerializedError | undefined
}

export const useServerError = ({ isError, error }: UseServerErrorProps): void => {
  useEffect(() => {
    if (isError && error) {
      const message = getErrorMessage(error as ErrorResponse);
      alert(message);
    }
  }, [error, isError]);
};
