import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthState } from "../../types";

export const selectAuthState = (state: RootState): AuthState => state.auth;

export const selectAuthenticationState = createSelector(
	selectAuthState,
	(state: AuthState) => state.isAuthenticated,
);
