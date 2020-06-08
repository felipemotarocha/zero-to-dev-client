import { createSelector } from "reselect";

const selectNote = (state) => state.note;

export const selectUserVideoNotes = createSelector(
	[selectNote],
	(note) => note.userVideoNotes
);

export const selectNotesEditable = createSelector(
	[selectNote],
	(note) => note.editable
);
