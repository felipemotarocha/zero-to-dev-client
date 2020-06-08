import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	Container,
	YoutubePlayer,
	VideoNotesContainer,
	AddNoteContainer,
} from "./video-player.styles";
import { selectUserVideoNotes } from "../../redux/note/note.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { fetchUserVideoNotesStart } from "../../redux/note/note.actions";
import { setVideoPlayer } from "../../redux/video/video.actions";

import VideoNotes from "../video-notes/video-notes.component";
import AddNote from "../add-note/add-note.component";

const VideoPlayer = ({ userVideoNotes, currentUser }) => {
	let { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchUserVideoNotesStart({ videoId: id }));
		}
	}, [dispatch, id, currentUser]);

	const playerOptions = {
		height: "500",
		width: "800",
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<Container>
			<YoutubePlayer
				videoId={id}
				opts={playerOptions}
				onReady={({ target }) => dispatch(setVideoPlayer(target))}
			/>
			<VideoNotesContainer>
				<VideoNotes />
			</VideoNotesContainer>

			<AddNoteContainer>
				<AddNote />
			</AddNoteContainer>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	userVideoNotes: selectUserVideoNotes,
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(VideoPlayer);
