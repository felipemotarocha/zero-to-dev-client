import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { signUpStart } from "../../redux/user/user.actions";
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
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
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

const SignUp = ({ currentUser, isLoading }) => {
	const [name, setName] = useState("");
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

		dispatch(signUpStart({ name, email, password }));
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
								Criar uma conta
							</Typography>
							<form className={classes.form} noValidate>
								<TextField
									value={name}
									onChange={({ target: { value } }) => setName(value)}
									className={classes.root}
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="name"
									label="Nome completo"
									name="name"
									autoComplete="name"
									autoFocus
									InputLabelProps={{
										className: classes.root,
									}}
								/>
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
									helperText="Deve ter pelo menos 7 caracteres."
								/>
								<Button
									onClick={handleSubmit}
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									CRIAR CONTA
								</Button>
								<Grid container>
									<Grid item>
										<Link
											className={classes.link}
											component="span"
											variant="body2"
											onClick={() => history.push("/login")}
										>
											Já tem uma conta? Fazer login
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

export default connect(mapStateToProps)(SignUp);
