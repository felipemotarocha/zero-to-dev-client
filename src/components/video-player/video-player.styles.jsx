import styled from "styled-components";
import YouTube from "react-youtube";

export const Container = styled.div`
	display: flex;
	height: 500px;
	justify-content: center;
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
