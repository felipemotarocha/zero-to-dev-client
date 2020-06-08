import NoteActionTypes from "./note.types";
import UserActionTypes from "../user/user.types";
import { addNote, deleteNote } from "./note.utils";

const INITIAL_STATE = {
	userVideoNotes: null,
	isLoading: true,
	editable: true,
};

const noteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NoteActionTypes.FETCH_USER_VIDEO_NOTES_START:
		case NoteActionTypes.ADD_VIDEO_NOTE_START:
		case NoteActionTypes.DELETE_NOTE_START:
			return {
				...state,
				isLoading: true,
			};
		case NoteActionTypes.FETCH_USER_VIDEO_NOTES_SUCCESS:
			return {
				...state,
				userVideoNotes: action.payload,
				isLoading: false,
			};
		case NoteActionTypes.ADD_VIDEO_NOTE_SUCCESS:
			return {
				...state,
				userVideoNotes: addNote(state.userVideoNotes, action.payload),
			};
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				userVideoNotes: null,
			};
		case NoteActionTypes.DELETE_NOTE_SUCCESS:
			return {
				...state,
				userVideosNotes: deleteNote(state.userVideoNotes, action.payload),
				isLoading: false,
			};
		case NoteActionTypes.TOGGLE_NOTES_EDITABLE:
			return {
				...state,
				editable: !state.editable,
			};
		case NoteActionTypes.FETCH_USER_VIDEO_NOTES_FAILURE:
		case NoteActionTypes.DELETE_NOTE_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default noteReducer;
