import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: 10px 0;

	@media (max-width: 768px) {
		width: 90%;
		margin: auto;
		margin-top: 15px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 90%;
		margin: auto;
		margin-top: 15px;
	}
`;
