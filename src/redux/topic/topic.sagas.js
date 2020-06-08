import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

import TopicActionTypes from "./topic.types";
import { fetchTopicsSuccess, fetchTopicsFailure } from "./topic.actions";

// Fetch data functions
export function* fetchTopics() {
	try {
		const { data } = yield axios.get(
			"/topics/all/with-videos?sort=alphabetically"
		);
		yield put(fetchTopicsSuccess(data));
	} catch ({ response: { data } }) {
		yield put(fetchTopicsFailure(data));
	}
}

// Listeners
export function* onFetchTopicsStart() {
	yield takeLatest(TopicActionTypes.FETCH_TOPICS_START, fetchTopics);
}

export function* topicSagas() {
	yield all([call(onFetchTopicsStart)]);
}
