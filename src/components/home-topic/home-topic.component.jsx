import React from "react";

import {
	Container,
	Image,
	Headline,
	ZeroToDev,
	Text,
} from "./home-topic.styles";

const HomeTopic = () => {
	return (
		<Container>
			<Image
				src="https://letertag.sirv.com/Images/Zero%20To%20DEV/bg.png"
				alt="Study"
			/>
			<Headline>
				Bem-vindo ao <ZeroToDev>ZERO TO DEV</ZeroToDev>!
			</Headline>
			<Text>
				Para começar a aprender, escolha um tópico no menu da esquerda.
			</Text>
			<Text>Bons estudos! :)</Text>
		</Container>
	);
};

export default HomeTopic;
