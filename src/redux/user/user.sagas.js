import { takeLatest, put, call, all } from 'redux-saga/effects';
import axios from 'axios';

import UserActionTypes from './user.types';
import {
	signInSuccess,
	signInFailure,
	signUpSuccess,
	signUpFailure,
	signOutSuccess,
	signOutFailure,
	checkUserSessionSuccess,
	checkUserSessionFailure,
} from './user.actions';

// Asynchronous code
export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const {
			data: { user, token },
		} = yield axios.post(
			`${process.env.REACT_APP_API_URL}/api/users/login`,
			{
				email,
				password,
			}
		);
		localStorage.setItem('authToken', token);
		yield put(signInSuccess(user));
	} catch ({ response: { data } }) {
		yield put(signInFailure(data));
	}
}

export function* signUp({ payload: { name, email, password } }) {
	try {
		const {
			data: { user, token },
		} = yield axios.post(`${process.env.REACT_APP_API_URL}/api/users`, {
			name,
			email,
			password,
		});
		localStorage.setItem('authToken', token);
		yield put(signUpSuccess(user));
	} catch ({ response: { data } }) {
		yield put(signUpFailure(data));
	}
}

export function* signInWithGoogle({
	payload: { name, email, imageUrl, googleId },
}) {
	try {
		const {
			data: { user, token },
		} = yield axios.post(
			`${process.env.REACT_APP_API_URL}/api/users/oauth/google`,
			{
				email,
				name,
				googleId,
				profileImage: imageUrl,
			}
		);
		yield localStorage.setItem('authToken', token);
		yield put(signInSuccess(user));
	} catch ({ response: { data } }) {
		yield put(signInFailure(data));
	}
}

export function* signOut() {
	try {
		const authToken = localStorage.getItem('authToken');
		yield axios.post(
			`${process.env.REACT_APP_API_URL}/api/users/logout`,
			{},
			{
				headers: { Authorization: `Bearer ${authToken}` },
			}
		);
		localStorage.removeItem('authToken');
		yield put(signOutSuccess());
	} catch ({ response: { data } }) {
		yield put(signOutFailure(data));
	}
}

export function* checkUserSession() {
	try {
		const authToken = localStorage.getItem('authToken');
		const { data } = yield axios.get(
			`${process.env.REACT_APP_API_URL}/api/users/me`,
			{
				headers: { Authorization: `Bearer ${authToken}` },
			}
		);
		yield put(checkUserSessionSuccess(data));
	} catch (error) {
		yield localStorage.removeItem('authToken');
		yield put(checkUserSessionFailure(error));
	}
}

// Listeners
export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSessionStart() {
	yield takeLatest(
		UserActionTypes.CHECK_USER_SESSION_START,
		checkUserSession
	);
}

export function* userSagas() {
	yield all([
		call(onEmailSignInStart),
		call(onGoogleSignInStart),
		call(onSignUpStart),
		call(onCheckUserSessionStart),
		call(onSignOutStart),
	]);
}
