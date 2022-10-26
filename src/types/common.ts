import { InputTypes } from "./auth";

export enum ElementTypes {
	AUTOCOMPLETE = 'AUTOCOMPLETE',
	INPUT = 'INPUT'
}

enum ErrorStatus {
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
}

export type ErrorMessage = {
	statusCode: ErrorStatus,
	message: string,
	error: string,
}

export type Option<T = number | string> = {
	label: string,
	value: T,
}

export type ErrorResponse = {
	status: ErrorStatus,
	data: ErrorMessage
}

export type FormConfigItem<T> = {
	readonly name: T,
	readonly label: string
	readonly type?: InputTypes
	readonly elementType?: ElementTypes,
	readonly options?: Option<string | number>[],
}
