import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

import { Container } from "./home.styles";

import HomeTopic from "../../components/home-topic/home-topic.component";
import TopicView from "../../components/topic-view/topic-view.component";
import VideoPlayer from "../../components/video-player/video-player.component";

const Home = () => {
	let match = useRouteMatch();

	return (
		<Container>
			<Switch>
				<Route exact path="/home" component={HomeTopic} />
				<Route path={`${match.url}/topic/:id`} component={TopicView} />
				<Route path={`${match.url}/video/:id`} component={VideoPlayer} />
			</Switch>
		</Container>
	);
};

export default Home;
