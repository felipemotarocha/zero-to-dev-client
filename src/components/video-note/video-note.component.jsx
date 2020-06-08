import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
	Container,
	Time,
	Text,
	Buttons,
	Delete,
	Edit,
} from "./video-note.styles";
import { selectVideoPlayer } from "../../redux/video/video.selectors";
import { selectNotesEditable } from "../../redux/note/note.selectors";

const VideoNote = ({
	note: { _id, text, videoTime },
	videoPlayer,
	notesEditable,
}) => {
	const getMinutesAndSeconds = (s) => {
		return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
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
							<Delete fontSize="small" />
							<Edit fontSize="small" />
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
});

export default connect(mapStateToProps)(VideoNote);
