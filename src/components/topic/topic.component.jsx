import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { ReactSVG } from "react-svg";
import HomeIcon from "@material-ui/icons/Home";

import { selectCurrentTopic } from "../../redux/topic/topic.selectors";

const useStyles = makeStyles(() => ({
	blue: {
		backgroundColor: "#1C6CF3",
	},
}));

const Topic = ({ topic: { _id, icon, title, description }, currentTopic }) => {
	const history = useHistory();
	const match = useRouteMatch();
	const handleClick = () => {
		if (_id) {
			// Topic is being received.
			return history.push(`${match.url}/topic/${_id}`);
		}
		// None topic is being received, so the user clicked in the "Home" button.
		return history.push("/home");
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
