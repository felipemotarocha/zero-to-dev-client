import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";
import { useMediaQuery } from "react-responsive";

import { Container } from "./sidebar.styles";
import { selectTopics } from "../../redux/topic/topic.selectors";
import { selectSidebarHidden } from "../../redux/mobile/mobile.selectors";
import { setSidebarHidden } from "../../redux/mobile/mobile.actions";

import Topic from "../topic/topic.component";

const SideBar = ({ topics, isSidebarHidden }) => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	useEffect(() => {
		if (isMobile) {
			dispatch(setSidebarHidden(true));
		} else {
			dispatch(setSidebarHidden(false));
		}
	}, [isMobile, dispatch]);

	return (
		<Slide direction="right" in={!isSidebarHidden} mountOnEnter>
			<Container>
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
			</Container>
		</Slide>
	);
};

const mapStateToProps = createStructuredSelector({
	topics: selectTopics,
	isSidebarHidden: selectSidebarHidden,
});

export default connect(mapStateToProps)(SideBar);
