import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	Container,
	Content,
	YoutubePlayer,
	VideoNotesContainer,
	AddNoteContainer,
} from "./video-player.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { fetchUserVideoNotesStart } from "../../redux/note/note.actions";
import { setVideoPlayer } from "../../redux/video/video.actions";

import VideoNotes from "../video-notes/video-notes.component";
import AddNote from "../add-note/add-note.component";

const VideoPlayer = ({ currentUser }) => {
	let { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchUserVideoNotesStart({ videoId: id }));
		}
	}, [dispatch, id, currentUser]);

	const playerOptions = {
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<Container>
			<Content>
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
			</Content>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(VideoPlayer);
