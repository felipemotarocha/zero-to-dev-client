import MobileActionTypes from "./mobile.types";

export const toggleSidebarHidden = () => ({
	type: MobileActionTypes.TOGGLE_SIDEBAR_HIDDEN,
});

export const setSidebarHidden = (payload) => ({
	type: MobileActionTypes.SET_SIDEBAR_HIDDEN,
	payload,
});
