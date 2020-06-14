import styled from "styled-components";
import YouTube from "react-youtube";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	flex-flow: wrap;
	width: 1215px;

	@media (max-width: 1024px) {
		width: 100%;
		padding-top: 108px;
		padding-bottom: 44px;
	}
`;

export const YoutubePlayer = styled(YouTube)`
	border-radius: 10px;
	height: 500px;
	width: 800px;
	box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.23);

	@media (max-width: 768px) {
		width: 700px;
		height: 400px;
		margin-bottom: 10px;
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		width: 800px;
		height: 500px;
		margin-bottom: 10px;
	}
`;

export const VideoNotesContainer = styled.div`
	width: 400px;
	margin-left: 15px;
	height: 500px;

	@media (max-width: 768px) {
		margin-left: 0;
		width: 90%;
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		width: 800px;
		margin-left: 0;
	}
`;

export const AddNoteContainer = styled.div`
	width: 100%;
`;
