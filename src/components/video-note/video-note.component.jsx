import React from "react";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";

import {
	Container,
	Time,
	Text,
	Buttons,
	Delete,
	Edit,
} from "./video-note.styles";
import { selectVideoPlayer } from "../../redux/video/video.selectors";
import {
	selectNotesEditable,
	selectEditBoxHidden,
} from "../../redux/note/note.selectors";
import {
	deleteNoteStart,
	toggleEditBoxHidden,
} from "../../redux/note/note.actions";
import customAlert from "../custom-alert/custom-alert.component";

const VideoNote = ({
	note: { _id, text, videoTime },
	videoPlayer,
	notesEditable,
	editBoxHidden,
}) => {
	const dispatch = useDispatch();

	const getMinutesAndSeconds = (s) => {
		return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
	};

	const confirmDelete = () => {
		confirmAlert({
			customUI: ({ onClose }) =>
				customAlert({
					text: "Deseja mesmo apagar essa nota?",
					message: "Ela não poderá ser recuperada.",
					handleYesClick: () => dispatch(deleteNoteStart({ noteId: _id })),
					onClose: onClose,
				}),
		});
	};

	return (
		<Container>
			{videoPlayer ? (
				<>
					{" "}
					<Time onClick={() => videoPlayer.seekTo(videoTime)}>
						{getMinutesAndSeconds(videoTime)}:
					</Time>
					<Text>{text}</Text>
					{notesEditable ? (
						<Buttons>
							<Delete fontSize="small" onClick={confirmDelete} />
							<Edit
								fontSize="small"
								onClick={() => dispatch(toggleEditBoxHidden({ noteId: _id }))}
							/>
						</Buttons>
					) : (
						""
					)}
				</>
			) : (
				""
			)}
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	videoPlayer: selectVideoPlayer,
	notesEditable: selectNotesEditable,
	editBoxHidden: selectEditBoxHidden,
});

export default connect(mapStateToProps)(VideoNote);
