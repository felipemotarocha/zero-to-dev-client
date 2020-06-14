import React from "react";

import {
	Container,
	Content,
	Image,
	Headline,
	ZeroToDev,
	Text,
} from "./home-topic.styles";

const HomeTopic = () => {
	return (
		<Container>
			<Content>
				<Image
					src="https://letertag.sirv.com/Images/Zero%20To%20DEV/bg-2.png"
					alt="Study"
				/>
				<Headline>
					Bem-vindo ao <ZeroToDev>ZERO TO DEV</ZeroToDev>!
				</Headline>
				<Text>
					Para começar a aprender, escolha um tópico no menu da esquerda.
				</Text>
				<Text>Bons estudos! :)</Text>
			</Content>
		</Container>
	);
};

export default HomeTopic;
