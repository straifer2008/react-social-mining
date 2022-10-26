import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { AccessTokenResponse, LoginFormValues, RegisterValues } from "../types/auth";
import { prepareHeaders } from "../utils/rtk-headers";
import { API_ROUTES } from "../router/api.routes";

export const authAPI = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
		prepareHeaders,
	}),
	endpoints: (builder) => ({
		login: builder.mutation<AccessTokenResponse, LoginFormValues>({
			query: (body) => ({
				url: API_ROUTES.AUTH.LOGIN,
				method: 'POST',
				body,
			}),
		}),
		register: builder.mutation<AccessTokenResponse, RegisterValues>({
			query: (body) => ({
				url: API_ROUTES.AUTH.REGISTER,
				method: 'POST',
				body,
			}),
		}),
	})
});

// @ts-ignore
export const { useLoginMutation, useRegisterMutation } = authAPI;
