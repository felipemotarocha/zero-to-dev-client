import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

import { Container } from './add-note.styles';
import { selectVideoPlayer } from '../../redux/video/video.selectors';
import { addVideoNoteStart } from '../../redux/note/note.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const useStyles = makeStyles(() => ({
	root: {
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#1C6CF3',
			color: '#1C6CF3',
		},
		'& .Mui-focused': {
			color: '#1C6CF3',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#1C6CF3',
			color: '#1C6CF3',
		},
	},
	submit: {
		marginLeft: '5px',
	},
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1C6CF3',
		},
	},
});

const AddNote = ({ videoPlayer, currentUser }) => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();
	const { id } = useParams();
	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text) {
			dispatch(
				addVideoNoteStart({
					videoId: id,
					text,
					videoTime: Math.floor(videoPlayer.getCurrentTime()),
				})
			);
			setText('');
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TextField
					value={text}
					onChange={({ target: { value } }) => setText(value)}
					variant='outlined'
					fullWidth
					id='note'
					label='Adicionar nova nota'
					name='note'
					disabled={currentUser ? false : true}
				/>
				<Button
					onClick={handleSubmit}
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submit}
					startIcon={<SaveIcon />}
					disabled={currentUser ? false : true}
				>
					SALVAR
				</Button>
			</Container>
		</ThemeProvider>
	);
};

const mapStateToProps = createStructuredSelector({
	videoPlayer: selectVideoPlayer,
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AddNote);
