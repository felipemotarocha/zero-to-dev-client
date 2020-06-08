import React from "react";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import Icon from "@material-ui/core/Icon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";

import { Logo } from "./navbar.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: "#1C6CF3",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		marginLeft: "5px",
	},
	toolbar: {
		width: "100%",
		justifyContent: "space-between",
	},
	buttons: {
		display: "flex",
		alignItems: "center",
	},
	username: {
		marginRight: "10px",
	},
	button: {
		margin: "5px",
	},
	yellow: {
		backgroundColor: "#FFBA56",
		color: "white",
		marginRight: "10px",
	},
	avatarImage: {
		marginRight: "10px",
	},
}));

const Navbar = ({ currentUser }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleLogoClick = () => {
		history.push("/home");
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.root}>
				<Toolbar className={classes.toolbar}>
					<Logo onClick={handleLogoClick}>
						<CodeIcon fontSize="large" />
						<Typography variant="h5" className={classes.title}>
							ZERO TO DEV
						</Typography>
					</Logo>
					{currentUser ? (
						<div className={classes.buttons}>
							{currentUser.profileImage ? (
								<Avatar
									alt="Profile"
									src={currentUser.profileImage}
									className={classes.avatarImage}
								/>
							) : (
								<Avatar alt="Profile" className={classes.yellow}>
									{currentUser.name[0]}
								</Avatar>
							)}

							<Typography variant="body1" className={classes.username}>
								{currentUser.name}
							</Typography>
							<Button
								onClick={() => dispatch(signOutStart())}
								color="inherit"
								endIcon={<ExitToAppIcon />}
							>
								Sair
							</Button>
						</div>
					) : (
						<div className={classes.buttons}>
							<Button
								onClick={() => history.push("/login")}
								color="inherit"
								startIcon={<Icon>login</Icon>}
								className={classes.button}
							>
								Login
							</Button>
							<Button
								onClick={() => history.push("/sign-up")}
								color="inherit"
								startIcon={<AddIcon />}
								className={classes.button}
							>
								CRIAR UMA CONTA
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Navbar);
