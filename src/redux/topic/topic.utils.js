export const selectTopicVideos = (topics, topicId) => {
	let topicVideos = [];

	topics.forEach(({ topic, videos }) => {
		if (topic._id === topicId) {
			topicVideos = videos;
		}
	});
	return topicVideos;
};
