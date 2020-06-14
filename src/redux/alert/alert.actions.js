import AlertTypes from "./alert.types";

export const openSuccessAlert = (message) => ({
	type: AlertTypes.OPEN_SUCCESS_ALERT,
	payload: message,
});

export const closeAlert = () => ({
	type: AlertTypes.CLOSE_ALERT,
});
