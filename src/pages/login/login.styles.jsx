import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	margin-left: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ffffff;

	@media (max-width: 1024px) {
		margin-left: 0;
	}
`;

export const Content = styled.div`
	width: 35%;

	@media (max-width: 1024px) {
		width: 80%;
	}
`;
