import { createSelector } from "reselect";

const selectVideo = (state) => state.video;

export const selectVideoPlayer = createSelector(
	[selectVideo],
	(video) => video.player
);
