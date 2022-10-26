import { ErrorResponse } from 'types';

export const getErrorMessage = (error: ErrorResponse): string => error?.data?.message || 'Server unavailable';
