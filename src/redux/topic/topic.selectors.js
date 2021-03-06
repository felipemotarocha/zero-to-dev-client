import { createSelector } from 'reselect';

const selectTopic = (state) => state.topic;

export const selectTopics = createSelector(
	[selectTopic],
	(topic) => topic.topics
);

export const selectTopicTitle = createSelector([selectTopic], (topic) =>
	topic.topics ? topic.topics.topic.title : null
);

export const selectTopicIcon = createSelector([selectTopic], (topic) =>
	topic.topics ? topic.topics.topic.icon : null
);

export const selectCurrentTopicId = createSelector([selectTopic], (topic) =>
	topic.currentTopicId ? topic.currentTopicId : null
);
