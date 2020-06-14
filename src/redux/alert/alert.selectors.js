import { createSelector } from "reselect";

const selectAlert = (state) => state.alert;

export const selectAlertMessage = createSelector([selectAlert], (alert) =>
	alert ? alert.message : null
);

export const selectAlertIsOpen = createSelector([selectAlert], (alert) =>
	alert ? alert.isOpen : null
);

export const selectAlertType = createSelector([selectAlert], (alert) =>
	alert ? alert.type : null
);
