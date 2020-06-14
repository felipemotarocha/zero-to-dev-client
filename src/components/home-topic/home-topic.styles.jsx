import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding-bottom: 150px;
	text-align: center;
	padding: 20px;
	margin: auto;

	@media (max-width: 1024px) {
		margin: auto;
		width: 100%;
	}
`;

export const Image = styled.img`
	display: inline-block;
	height: 600px;
	width: auto;

	@media (max-width: 1024px) {
		height: auto;
		width: 100%;
	}
`;

export const Headline = styled.span`
	font-size: 3rem;
	font-weight: 500;

	@media (max-width: 1024px) {
		font-size: 2.7rem;
		line-height: 3rem;
	}
`;

export const ZeroToDev = styled.span`
	color: #4486f7;
`;

export const Text = styled.span`
	font-size: 1.5rem;

	@media (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;
