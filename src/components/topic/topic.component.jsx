import React from "react";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { ReactSVG } from "react-svg";
import HomeIcon from "@material-ui/icons/Home";
import { useMediaQuery } from "react-responsive";

import { selectCurrentTopic } from "../../redux/topic/topic.selectors";
import { setSidebarHidden } from "../../redux/mobile/mobile.actions";

const useStyles = makeStyles(() => ({
	blue: {
		backgroundColor: "#1C6CF3",
	},
}));

const Topic = ({ topic: { _id, icon, title, description }, currentTopic }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	const handleClick = () => {
		if (_id) {
			// Topic is being received.
			history.push(`/home/topic/${_id}`);
			return isMobile ? dispatch(setSidebarHidden(true)) : null;
		}
		// None topic is being received, so the user clicked in the "Home" button.
		history.push("/home");
		return isMobile ? dispatch(setSidebarHidden(true)) : null;
	};

	const classes = useStyles();
	return (
		<ListItem
			button
			onClick={handleClick}
			selected={currentTopic ? currentTopic._id === _id : false}
		>
			<ListItemAvatar>
				<Avatar className={classes.blue}>
					{title === "Início" ? (
						<HomeIcon style={{ fill: "white" }} />
					) : (
						<Icon style={{ fill: "white" }}>
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
	currentTopic: selectCurrentTopic,
});

export default connect(mapStateToProps)(Topic);
