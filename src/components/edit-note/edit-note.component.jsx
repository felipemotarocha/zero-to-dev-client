import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";

import { Container, Box, Headline, Buttons } from "./edit-note.styles";
import {
	toggleEditBoxHidden,
	updateNoteStart,
} from "../../redux/note/note.actions";
import { selectNoteBeingEdited } from "../../redux/note/note.selectors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#085DEF",
		},
	},
});

const EditNote = ({ noteBeingEdited: { noteId } }) => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Box>
					<Headline>Insira o novo texto da nota</Headline>
					<TextField
						value={text}
						onChange={({ target: { value } }) => setText(value)}
						id="noteText"
						label="Novo texto"
						variant="outlined"
						fullWidth
						style={{ margin: "15px 0" }}
					/>
					<Buttons>
						<Button
							variant="contained"
							color="primary"
							fullWidth
							startIcon={<SaveIcon />}
							style={{ marginRight: "5px" }}
							onClick={() => {
								dispatch(updateNoteStart({ noteId, text }));
								dispatch(toggleEditBoxHidden());
							}}
							disabled={text.length > 0 ? false : true}
						>
							Salvar
						</Button>
						<Button
							variant="outlined"
							color="primary"
							fullWidth
							startIcon={<CloseIcon />}
							style={{ marginLeft: "5px" }}
							onClick={() => dispatch(toggleEditBoxHidden())}
						>
							Cancelar
						</Button>
					</Buttons>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

const mapStateToProps = createStructuredSelector({
	noteBeingEdited: selectNoteBeingEdited,
});

export default connect(mapStateToProps)(EditNote);
