import { combineReducers } from "redux";
import topicReducer from "./topic/topic.reducer";
import userReducer from "./user/user.reducer";
import noteReducer from "./note/note.reducer";
import videoReducer from "./video/video.reducer";
import alertReducer from "./alert/alert.reducer";
import mobileReducer from "./mobile/mobile.reducer";

export default combineReducers({
	topic: topicReducer,
	user: userReducer,
	note: noteReducer,
	video: videoReducer,
	alert: alertReducer,
	mobile: mobileReducer,
});
