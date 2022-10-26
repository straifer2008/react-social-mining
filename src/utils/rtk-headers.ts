// eslint-disable-next-line import/no-unresolved
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { getTokenFromStorage } from './storage';

export const prepareHeaders = (headers: Headers): MaybePromise<Headers> => {
  const token = getTokenFromStorage();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
