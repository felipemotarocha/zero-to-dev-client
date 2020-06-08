import VideoActionTypes from "./video.types";

const INITIAL_STATE = {
	player: null,
};

const videoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case VideoActionTypes.SET_VIDEO_PLAYER:
			return {
				...state,
				player: action.payload,
			};
		default:
			return state;
	}
};

export default videoReducer;
