import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;

	animation: fadeIn 350ms ease forwards;

	@keyframes fadeIn {
		from {
			background-color: rgba(0, 0, 0, 0.1);
		}
		to {
			background-color: rgba(0, 0, 0, 0.35);
		}
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;
	opacity: 1;
	padding: 30px;
	border-radius: 10px;

	animation: fadeUp 350ms ease;

	@keyframes fadeUp {
		from {
			transform: translateY(80px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

export const Headline = styled.span`
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
`;

export const Buttons = styled.div`
	display: flex;
	width: 100%;
`;
