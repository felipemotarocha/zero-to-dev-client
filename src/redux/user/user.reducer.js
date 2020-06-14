import UserActionTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	isLoading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.EMAIL_SIGN_IN_START:
		case UserActionTypes.SIGN_UP_START:
		case UserActionTypes.CHECK_USER_SESSION_START:
		case UserActionTypes.SIGN_OUT_START:
			return {
				...state,
				isLoading: true,
			};
		case UserActionTypes.SIGN_IN_SUCCESS:
		case UserActionTypes.SIGN_UP_SUCCESS:
		case UserActionTypes.CHECK_USER_SESSION_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				isLoading: false,
			};
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				isLoading: false,
				currentUser: null,
			};
		case UserActionTypes.CHECK_USER_SESSION_FAILURE:
			return {
				...state,
				currentUser: null,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
