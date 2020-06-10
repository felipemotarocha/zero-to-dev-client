import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import {
	Alert,
	AlertHeadline,
	AlertText,
	Buttons,
} from "./custom-alert.styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#085DEF",
		},
	},
});

const customConfirmAlert = ({
	text = "",
	message = "",
	handleYesClick = () => {},
	handleNoClick = () => {},
	handleConfirmClick = () => {},
	onClose,
	type = "confirm",
	inputLabel = "",
	buttonText = "",
	handleInputChange = () => {},
}) => {
	return (
		<ThemeProvider theme={theme}>
			<Alert>
				<AlertHeadline>{text}</AlertHeadline>
				{message ? <AlertText>{message}</AlertText> : ""}

				{type === "textInput" ? (
					<TextField
						onChange={({ target: { value } }) => {
							handleInputChange(value);
						}}
						id="textInput"
						label={inputLabel}
						variant="outlined"
						style={{ margin: "15px 0" }}
						fullWidth
					/>
				) : (
					""
				)}

				<Buttons>
					{type === "textInput" ? (
						<Button
							variant="contained"
							color="primary"
							size="large"
							fullWidth
							onClick={() => {
								handleConfirmClick();
								onClose();
							}}
						>
							{buttonText}
						</Button>
					) : (
						""
					)}
					{type === "confirm" ? (
						<>
							<Button
								variant="contained"
								color="primary"
								style={{ marginRight: "10px" }}
								size="large"
								fullWidth
								onClick={() => {
									handleYesClick();
									onClose();
								}}
							>
								Sim
							</Button>
							<Button
								variant="contained"
								color="primary"
								size="large"
								fullWidth
								onClick={() => {
									handleNoClick();
									onClose();
								}}
							>
								Não
							</Button>
						</>
					) : (
						""
					)}
				</Buttons>
			</Alert>
		</ThemeProvider>
	);
};

export default customConfirmAlert;
