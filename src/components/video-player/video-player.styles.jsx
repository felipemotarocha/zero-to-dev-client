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
`;

export const YoutubePlayer = styled(YouTube)`
	border-radius: 10px;
	width: 800px;
`;

export const VideoNotesContainer = styled.div`
	width: 400px;
	margin-left: 15px;
	height: 500px;
`;

export const AddNoteContainer = styled.div`
	width: 100%;
`;
