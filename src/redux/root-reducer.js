import { combineReducers } from "redux";
import topicReducer from "./topic/topic.reducer";
import userReducer from "./user/user.reducer";
import noteReducer from "./note/note.reducer";
import videoReducer from "./video/video.reducer";

export default combineReducers({
	topic: topicReducer,
	user: userReducer,
	note: noteReducer,
	video: videoReducer,
});
