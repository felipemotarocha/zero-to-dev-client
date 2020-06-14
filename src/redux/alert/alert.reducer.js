import AlertTypes from "./alert.types";

const INITIAL_STATE = {
	type: null,
	message: null,
	isOpen: false,
};

const successMessageReducer = (state = INITIAL_STATE, action) => {
	if (action.successMessage) {
		return {
			...state,
			type: "success",
			isOpen: true,
			message: action.successMessage,
		};
	}
	if (action.error) {
		return {
			...state,
			type: "error",
			isOpen: true,
			message: action.error,
		};
	}
	switch (action.type) {
		case AlertTypes.CLOSE_ALERT:
			return {
				...state,
				isOpen: false,
			};
		default:
			return state;
	}
};

export default successMessageReducer;
