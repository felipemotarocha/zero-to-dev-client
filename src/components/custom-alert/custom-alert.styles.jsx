import styled from "styled-components";

export const Alert = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.25);
	padding: 30px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
`;

export const AlertHeadline = styled.span`
	font-size: 1.8rem;
	font-weight: 600;
	color: #1c6cf3;
	margin: 0;
`;

export const AlertText = styled.span`
	font-size: 1.2rem;
	margin-bottom: 10px;
`;

export const Buttons = styled.div`
	display: flex;
	margin-left: 3px;
	height: 100%;
	align-items: center;
`;
