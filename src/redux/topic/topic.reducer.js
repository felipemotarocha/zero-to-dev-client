import TopicActionTypes from './topic.types';

const INITIAL_STATE = {
	topics: null,
	currentTopicId: null,
	isLoading: false,
};

const topicReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TopicActionTypes.FETCH_TOPICS_START:
			return {
				...state,
				isLoading: true,
			};
		case TopicActionTypes.FETCH_TOPICS_SUCCESS:
			return {
				...state,
				topics: action.payload,
				isLoading: false,
			};
		case TopicActionTypes.FETCH_TOPICS_FAILURE:
			return {
				...state,
				isLoading: false,
			};
		case TopicActionTypes.SET_CURRENT_TOPIC_ID:
			return {
				...state,
				currentTopicId: action.payload,
			};

		default:
			return state;
	}
};

export default topicReducer;
