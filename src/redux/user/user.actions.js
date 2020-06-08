import UserActionTypes from "./user.types";

export const emailSignInStart = (credentials) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: credentials,
});

export const googleSignInStart = (credentials) => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
	payload: credentials,
});

export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	error,
});

export const signUpStart = (credentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: credentials,
});

export const signUpSuccess = (user) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: user,
});

export const signUpFailure = (error) => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: error,
});

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	error,
});

export const checkUserSessionStart = () => ({
	type: UserActionTypes.CHECK_USER_SESSION_START,
});

export const checkUserSessionSuccess = (user) => ({
	type: UserActionTypes.CHECK_USER_SESSION_SUCCESS,
	payload: user,
});

export const checkUserSessionFailure = (error) => ({
	type: UserActionTypes.CHECK_USER_SESSION_FAILURE,
	payload: error,
});
