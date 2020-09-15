import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	flex-flow: wrap;
	padding: 10px 0;
	width: 100%;
	margin-top: 64px;
`;

export const Headline = styled.span`
	display: inline-block;
`;

export const Videos = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 1024px) {
		justify-content: center;
	}
`;
