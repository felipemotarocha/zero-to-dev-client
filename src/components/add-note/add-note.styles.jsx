import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	margin: 15px 0;
	width: 100%;

	@media (max-width: 767px) {
		width: 100%;
		margin-top: 15px;
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		width: 700px;
		margin-top: 15px;
	}

	@media (min-width: 1024px) and (max-width: 1025px) {
		width: 900px;
		margin-top: 15px;
	}
`;
