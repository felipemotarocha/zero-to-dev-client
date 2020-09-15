import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { Container } from './video-item.styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
	},
	media: {
		height: '160px',
	},
	content: {
		height: '80px',
		display: 'flex',
		alignItems: 'center',
	},
	button: {
		color: '#1C6CF3',
	},
	buttons: {
		marginTop: '-5px',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const VideoItem = ({ video: { title, videoId } }) => {
	const history = useHistory();
	const classes = useStyles();

	const handleClick = () => {
		history.push(`/home/video/${videoId}`);
	};
	return (
		<Container>
			<Card className={classes.root}>
				<CardActionArea onClick={handleClick}>
					<CardMedia
						className={classes.media}
						image={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
						title={title}
					/>
					<CardContent className={classes.content}>
						<Typography
							style={{ margin: '0', fontWeight: '500' }}
							gutterBottom
							variant='h6'
							component='h2'
						>
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.buttons}>
					<Button
						size='small'
						color='primary'
						className={classes.button}
						onClick={handleClick}
						startIcon={<PlayCircleOutlineIcon />}
					>
						Assistir
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
};

export default VideoItem;
