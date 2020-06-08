import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	text-align: center;
	display: grid;
	grid-template-rows: 50px 1fr;
	border-radius: 10px;
	box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.23);
	max-width: 400px;
`;

export const Headline = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #1c6cf3;
	color: white;
	text-transform: uppercase;
	font-size: 1.5rem;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	width: 100%;
	position: relative;
`;

export const Edit = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	right: 5px;
	padding: 10px;
	border-radius: 50%;
	transition: all 250ms ease;

	&:hover {
		cursor: pointer;
		background: #4686f4;
	}
`;

export const Notes = styled.div`
	text-align: left;
	padding: 10px 20px;
	max-width: 400px;
	overflow-y: scroll;
`;

export const SignMessage = styled.div`
	max-width: 400px;
	padding: 0 20px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.4rem;
`;

export const Message = styled.span``;

export const BlueText = styled.span`
	color: #085def;

	&:hover {
		cursor: pointer;
		color: #0441a8;
	}
`;
