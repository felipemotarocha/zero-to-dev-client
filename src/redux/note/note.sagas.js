import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

import NoteActionTypes from "./note.types";
import {
	fetchUserVideoNotesSuccess,
	fetchUserVideoNotesFailure,
	addVideoNoteSuccess,
	addVideoNoteFailure,
	deleteNoteSuccess,
	deleteNoteFailure,
} from "./note.actions";

// Asynchronous operations
export function* fetchUserVideoNotes({ payload: { videoId } }) {
	try {
		const authToken = localStorage.getItem("authToken");
		const { data } = yield axios.get(
			`/notes/my-notes?video=${videoId}&sort=true`,
			{
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			}
		);
		yield put(fetchUserVideoNotesSuccess(data));
	} catch ({ response: { data } }) {
		yield put(fetchUserVideoNotesFailure(data));
	}
}

export function* addVideoNote({ payload: { text, videoTime, videoId } }) {
	try {
		const authToken = localStorage.getItem("authToken");
		const { data } = yield axios.post(
			"/notes",
			{
				text,
				videoTime,
				video: videoId,
			},
			{
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			}
		);
		yield put(addVideoNoteSuccess(data));
	} catch ({ response: { data } }) {
		yield put(addVideoNoteFailure(data));
	}
}

export function* deleteNote({ payload: noteId }) {
	try {
		const { data } = yield axios.delete(`/notes/${noteId}`);
		yield put(deleteNoteSuccess(data));
	} catch ({ response: { data } }) {
		yield put(deleteNoteFailure(data));
	}
}

// Listeners
export function* onFetchUserVideoNotesStart() {
	yield takeLatest(
		NoteActionTypes.FETCH_USER_VIDEO_NOTES_START,
		fetchUserVideoNotes
	);
}

export function* onAddVideoNoteStart() {
	yield takeLatest(NoteActionTypes.ADD_VIDEO_NOTE_START, addVideoNote);
}

export function* onRemoveNoteStart() {
	yield takeLatest(NoteActionTypes.DELETE_NOTE_START, deleteNote);
}

export function* noteSagas() {
	yield all([
		call(onFetchUserVideoNotesStart),
		call(onAddVideoNoteStart),
		call(onRemoveNoteStart),
	]);
}
