import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GoogleLogin from "react-google-login";
import { ReactSVG } from "react-svg";

import {
	emailSignInStart,
	googleSignInStart,
} from "../../redux/user/user.actions";
import {
	selectCurrentUser,
	selectUserIsLoading,
} from "../../redux/user/user.selectors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1C6CF3",
		},
	},
});

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#1C6CF3",
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: "7px 0",
	},
	google: {
		margin: "7px 0",
		backgroundColor: "#fcfcfc",
		color: "#222",
	},
	root: {
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#1C6CF3",
			color: "#1C6CF3",
		},
		"& .Mui-focused": {
			color: "#1C6CF3",
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#1C6CF3",
			color: "#1C6CF3",
		},
	},
	checkbox: {
		"& .MuiIconButton-colorSecondary": {
			color: "#1C6CF3",
		},
	},
	link: {
		"&:hover": {
			cursor: "pointer",
		},
	},
}));

const SignIn = ({ isLoading, currentUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (currentUser) {
			history.push("/home");
		}
	}, [currentUser, history]);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(emailSignInStart({ email, password }));
	};

	const handleSignInWithGoogle = (response) => {
		if (response.error) return;

		const {
			profileObj: { name, email, imageUrl, googleId },
		} = response;
		dispatch(googleSignInStart({ name, email, imageUrl, googleId }));
	};

	return (
		<>
			{isLoading ? (
				""
			) : (
				<ThemeProvider theme={theme}>
					<Container component="main" maxWidth="xs">
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component="h1" variant="h5">
								Fazer Login
							</Typography>
							<form className={classes.form} noValidate>
								<TextField
									value={email}
									onChange={({ target: { value } }) => setEmail(value)}
									className={classes.root}
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email"
									name="email"
									autoComplete="email"
									autoFocus
									InputLabelProps={{
										className: classes.root,
									}}
								/>
								<TextField
									value={password}
									onChange={({ target: { value } }) => setPassword(value)}
									className={classes.root}
									variant="outlined"
									margin="normal"
									required
									fullWidth
									name="password"
									label="Senha"
									type="password"
									id="password"
									autoComplete="current-password"
									InputLabelProps={{
										className: classes.root,
									}}
								/>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Lembrar de mim"
								/>
								<Button
									onClick={handleSubmit}
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									ENTRAR
								</Button>
								<GoogleLogin
									clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
									render={(renderProps) => (
										<Button
											onClick={renderProps.onClick}
											fullWidth
											variant="contained"
											className={classes.google}
											startIcon={
												<Icon>
													<ReactSVG src="https://letertag.sirv.com/Images/Zero%20To%20DEV/google-logo.svg" />
												</Icon>
											}
										>
											ENTRAR COM O GOOGLE
										</Button>
									)}
									onSuccess={handleSignInWithGoogle}
									onFailure={handleSignInWithGoogle}
								/>
								<Grid container>
									<Grid item>
										<Link
											className={classes.link}
											component="span"
											variant="body2"
											onClick={() => history.push("/sign-up")}
										>
											Não tem uma conta? Cadastre-se
										</Link>
									</Grid>
								</Grid>
							</form>
						</div>
					</Container>
				</ThemeProvider>
			)}
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isLoading: selectUserIsLoading,
});

export default connect(mapStateToProps)(SignIn);
