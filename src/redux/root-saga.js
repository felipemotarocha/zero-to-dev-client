import { all, call } from "redux-saga/effects";

import { topicSagas } from "./topic/topic.sagas";
import { userSagas } from "./user/user.sagas";
import { noteSagas } from "./note/note.sagas";

export default function* rootSagas() {
	yield all([call(topicSagas), call(userSagas), call(noteSagas)]);
}
