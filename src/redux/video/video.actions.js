import VideoActionTypes from "./video.types";

export const setVideoPlayer = (player) => ({
	type: VideoActionTypes.SET_VIDEO_PLAYER,
	payload: player,
});
