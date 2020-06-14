import MobileActionTypes from "./mobile.types";

const INITIAL_STATE = {
	isSidebarHidden: true,
};

const mobileReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MobileActionTypes.TOGGLE_SIDEBAR_HIDDEN:
			return {
				...state,
				isSidebarHidden: !state.isSidebarHidden,
			};
		case MobileActionTypes.SET_SIDEBAR_HIDDEN:
			return {
				...state,
				isSidebarHidden: action.payload,
			};
		default:
			return state;
	}
};

export default mobileReducer;
