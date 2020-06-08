import TopicActionTypes from "./topic.types";

export const fetchTopicsStart = () => ({
	type: TopicActionTypes.FETCH_TOPICS_START,
});

export const fetchTopicsSuccess = (topics) => ({
	type: TopicActionTypes.FETCH_TOPICS_SUCCESS,
	payload: topics,
});

export const fetchTopicsFailure = (error) => ({
	type: TopicActionTypes.FETCH_TOPICS_FAILURE,
	payload: error,
});

export const fetchTopicVideosStart = (topic) => ({
	type: TopicActionTypes.FETCH_TOPIC_VIDEOS_START,
	payload: topic,
});

export const fetchTopicVideosSuccess = (videos) => ({
	type: TopicActionTypes.FETCH_TOPIC_VIDEOS_SUCCESS,
	payload: videos,
});

export const fetchTopicVideosFailure = (error) => ({
	type: TopicActionTypes.FETCH_TOPIC_VIDEOS_FAILURE,
	payload: error,
});

export const resetTopicAndVideos = () => ({
	type: TopicActionTypes.RESET_TOPIC_AND_VIDEOS,
});
