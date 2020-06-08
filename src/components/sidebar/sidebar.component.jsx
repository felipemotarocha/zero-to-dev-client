import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectTopics } from "../../redux/topic/topic.selectors";

import Topic from "../topic/topic.component";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 280,
		backgroundColor: theme.palette.background.paper,
		boxShadow: "5px 9px 31px -25px rgba(0,0,0,0.75)",
	},
}));

const SideBar = ({ topics }) => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			<Topic
				key={"home"}
				topic={{
					title: "Início",
					description: "",
				}}
			/>
			{topics
				? topics.map(({ topic }) => <Topic key={topic._id} topic={topic} />)
				: ""}
		</List>
	);
};

const mapStateToProps = createStructuredSelector({
	topics: selectTopics,
});

export default connect(mapStateToProps)(SideBar);
