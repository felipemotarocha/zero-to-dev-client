import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export const Logo = styled.div`
	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`;

export const UserName = styled(Typography)`
	@media (max-width: 1024px) {
		display: none;
	}
`;

export const MenuButton = styled(IconButton)`
	display: none;
	margin-right: "5px";

	@media (max-width: 1024px) {
		display: flex;
	}
`;

export const UserAvatar = styled(Avatar)`
	margin-right: 10px;

	@media (max-width: 1024px) {
		margin-right: 0;
	}
`;

export const UserData = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const UserActionsMenu = styled(Menu)`
	margin-top: 13px;
	position: absolute;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
	display: flex;
	align-items: center;
`;
