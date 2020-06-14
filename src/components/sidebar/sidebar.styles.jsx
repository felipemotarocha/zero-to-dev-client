import styled from "styled-components";
import List from "@material-ui/core/List";

export const Container = styled(List)`
	width: 100%;
	max-width: 270px;
	min-height: 100vh;
	background-color: #ffffff;
	box-shadow: 5px 9px 31px -25px rgba(0, 0, 0, 0.75);
	position: fixed;
	left: 0;
	z-index: 4;
	margin-top: 60px;
`;
