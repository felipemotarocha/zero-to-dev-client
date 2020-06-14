import React from "react";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CodeIcon from "@material-ui/icons/Code";
import Icon from "@material-ui/core/Icon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import {
	Logo,
	MenuButton,
	UserData,
	UserName,
	UserAvatar,
	UserActionsMenu,
	StyledListItemIcon,
} from "./navbar.styles";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { toggleSidebarHidden } from "../../redux/mobile/mobile.actions";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "#1C6CF3",
		position: "fixed",
		top: 0,
		zIndex: 5,
	},
	title: {
		marginLeft: "5px",
	},
	toolbar: {
		width: "100%",
		justifyContent: "space-between",
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
	},
	listIcon: {
		marginRight: "6px",
		color: "#1C6CF3",
	},
}));

const Navbar = ({ currentUser }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogoClick = () => {
		history.push("/home");
	};

	return (
		<AppBar className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<MenuButton
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={() => dispatch(toggleSidebarHidden())}
				>
					<MenuIcon />
				</MenuButton>
				<Logo onClick={handleLogoClick}>
					<CodeIcon fontSize="large" />
					<Typography variant="h5" className={classes.title}>
						ZERO TO DEV
					</Typography>
				</Logo>

				{/* User Actions (Login, Sign Out) */}
				{currentUser ? (
					// User is logged in
					<>
						<UserData onClick={handleClick}>
							{currentUser.profileImage ? (
								<UserAvatar alt="Profile" src={currentUser.profileImage} />
							) : (
								<UserAvatar alt="Profile" className={classes.yellow}>
									{currentUser.name[0]}
								</UserAvatar>
							)}
							<UserName variant="body1">{currentUser.name}</UserName>
							<KeyboardArrowDownIcon />

							{/* User Actions Menu */}
						</UserData>
						<UserActionsMenu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
							getContentAnchorEl={null}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "center",
							}}
						>
							<MenuItem
								onClick={() => {
									dispatch(signOutStart());
									handleClose();
								}}
							>
								<StyledListItemIcon>
									<ExitToAppIcon
										fontSize="small"
										className={classes.listIcon}
									/>
									<ListItemText primary="Sair" />
								</StyledListItemIcon>
							</MenuItem>
						</UserActionsMenu>
					</>
				) : (
					// User is not logged in
					<>
						<UserData>
							<IconButton
								style={{ color: "#FFFFFF", margin: "0" }}
								aria-label="person"
								onClick={handleClick}
							>
								<PersonIcon fontSize="large" />
								<KeyboardArrowDownIcon />
							</IconButton>

							{/* User Actions Menu */}
						</UserData>
						<UserActionsMenu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
							getContentAnchorEl={null}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "center",
							}}
						>
							<MenuItem
								onClick={() => {
									history.push("/login");
									handleClose();
								}}
							>
								<StyledListItemIcon>
									<Icon fontSize="small" className={classes.listIcon}>
										login
									</Icon>
									<ListItemText primary="Fazer login" />
								</StyledListItemIcon>
							</MenuItem>

							<MenuItem
								onClick={() => {
									history.push("/sign-up");
									handleClose();
								}}
							>
								<StyledListItemIcon>
									<AddIcon fontSize="small" className={classes.listIcon} />
									<ListItemText primary="Criar uma conta" />
								</StyledListItemIcon>
							</MenuItem>
						</UserActionsMenu>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Navbar);
