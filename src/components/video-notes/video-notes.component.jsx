import React from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";

import {
	Container,
	Headline,
	Notes,
	SignMessage,
	Message,
	BlueText,
	Edit,
} from "./video-notes.styles";
import {
	selectUserVideoNotes,
	selectNotesEditable,
	selectEditBoxHidden,
} from "../../redux/note/note.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleNotesEditable } from "../../redux/note/note.actions";

import VideoNote from "../video-note/video-note.component";
import EditNote from "../edit-note/edit-note.component";

const VideoNotes = ({
	userVideoNotes,
	currentUser,
	notesEditable,
	editBoxHidden,
}) => {
	const history = useHistory();
	const dispatch = useDispatch();
	return (
		<Container>
			<Headline>
				<span>Suas Notas</span>
				<Edit onClick={() => dispatch(toggleNotesEditable())}>
					{notesEditable ? (
						<CloseIcon fontSize="small" />
					) : (
						<CreateIcon fontSize="small" />
					)}
				</Edit>
			</Headline>
			{editBoxHidden ? "" : <EditNote />}
			{currentUser ? (
				<Notes>
					{userVideoNotes
						? userVideoNotes.map((note) => (
								<VideoNote key={note._id} note={note} />
						  ))
						: ""}
				</Notes>
			) : (
				<SignMessage>
					<CreateIcon fontSize="large" />
					<Message>
						<BlueText onClick={() => history.push("/login")}>
							Faça login
						</BlueText>{" "}
						ou{" "}
						<BlueText onClick={() => history.push("/sign-up")}>
							crie uma conta
						</BlueText>{" "}
						para poder adicionar notas às aulas!
					</Message>
				</SignMessage>
			)}
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	userVideoNotes: selectUserVideoNotes,
	currentUser: selectCurrentUser,
	notesEditable: selectNotesEditable,
	editBoxHidden: selectEditBoxHidden,
});

export default connect(mapStateToProps)(VideoNotes);
