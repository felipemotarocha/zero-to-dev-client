import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

export const Container = styled.div`
	display: flex;
	padding: 12px 0;
	flex-wrap: wrap;
	max-width: 400px;
	overflow-wrap: break-word;
	white-space: pre-line;
	align-items: center;
	position: relative;
	width: 100%;
	border-bottom: 1px solid #eee;

	@media (max-width: 1024px) {
		max-width: 100%;
	}
`;

export const Time = styled.div`
	display: inline-block;
	color: #085def;
	padding-right: 3px;
	font-weight: 600;

	&:hover {
		cursor: pointer;
		color: #0441a8;
		text-decoration: underline;
	}
`;

export const Text = styled.span`
	display: inline;
	max-width: 100%;
`;

export const Buttons = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

export const Delete = styled(DeleteIcon)`
	margin: 0 5px;
	color: #dc143c;
	border-radius: 50%;

	&:hover {
		cursor: pointer;
	}
`;

export const Edit = styled(CreateIcon)`
	color: #1c6cf3;

	&:hover {
		cursor: pointer;
	}
`;

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
	font-weight: bold;
`;

export const AlertText = styled.span`
	font-size: 1rem;
	margin: 12px 0;
`;
