import { createSelector } from "reselect";

const selectMobile = (state) => state.mobile;

export const selectSidebarHidden = createSelector(
	[selectMobile],
	(mobile) => mobile.isSidebarHidden
);
