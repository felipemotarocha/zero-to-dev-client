import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Container, Videos } from './topic-view.styles';
import { selectTopics } from '../../redux/topic/topic.selectors';
import { selectTopicVideos } from '../../redux/topic/topic.utils';

import VideoItem from '../video-item/video-item.component';

const TopicView = ({
	dispatch,
	match: {
		params: { id },
	},
	topics,
}) => {
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		if (topics) {
			setVideos(selectTopicVideos(topics, id));
		}
	}, [dispatch, id, topics]);

	return (
		<Container>
			<Videos>
				{videos
					? videos.map((video) => (
							<VideoItem key={video._id} video={video} />
					  ))
					: ''}
			</Videos>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	topics: selectTopics,
});

export default connect(mapStateToProps)(TopicView);
