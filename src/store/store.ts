import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authAPI } from "../services";
import { authReducer } from './auth';

const rootReducer = combineReducers({
	[authAPI.reducerPath]: authAPI.reducer,
	auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
		authAPI.middleware,
	])
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootStoreState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
