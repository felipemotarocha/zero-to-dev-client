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

export const Text = styled.div`
	max-width: 100%;
`;

export const Buttons = styled.div`
	display: flex;
	margin-left: 3px;
	height: 100%;
	align-items: center;
`;

export const Delete = styled(DeleteIcon)`
	margin-right: 5px;
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
