import React from 'react';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { ReactSVG } from 'react-svg';
import HomeIcon from '@material-ui/icons/Home';
import { useMediaQuery } from 'react-responsive';

import { selectCurrentTopicId } from '../../redux/topic/topic.selectors';
import { setSidebarHidden } from '../../redux/mobile/mobile.actions';
import { setCurrentTopicId } from '../../redux/topic/topic.actions';

const useStyles = makeStyles(() => ({
	blue: {
		backgroundColor: '#1C6CF3',
	},
}));

const Topic = ({
	topic: { _id, icon, title, description },
	currentTopicId,
}) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

	const handleClick = () => {
		if (_id) {
			// Topic is being received.
			history.push(`/home/topic/${_id}`);
			dispatch(setCurrentTopicId(_id));
			return isMobile ? dispatch(setSidebarHidden(true)) : null;
		}
		// None topic is being received, so the user clicked in the "Home" button.
		dispatch(setCurrentTopicId(null));
		history.push('/home');
		return isMobile ? dispatch(setSidebarHidden(true)) : null;
	};

	const classes = useStyles();
	return (
		<ListItem
			button
			onClick={handleClick}
			selected={currentTopicId ? currentTopicId === _id : false}
		>
			<ListItemAvatar>
				<Avatar className={classes.blue}>
					{title === 'Início' ? (
						<HomeIcon style={{ fill: 'white' }} />
					) : (
						<Icon style={{ fill: 'white' }}>
							<ReactSVG src={icon} />
						</Icon>
					)}
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={title} secondary={description} />
		</ListItem>
	);
};

const mapStateToProps = createStructuredSelector({
	currentTopicId: selectCurrentTopicId,
});

export default connect(mapStateToProps)(Topic);
