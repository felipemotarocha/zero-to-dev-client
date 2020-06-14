import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import Snackbar from "@material-ui/core/Snackbar";

import {
	selectAlertMessage,
	selectAlertIsOpen,
	selectAlertType,
} from "../../redux/alert/alert.selectors";
import { closeAlert } from "../../redux/alert/alert.actions";

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SuccessMessage = ({ children, alertMessage, isOpen, alertType }) => {
	const dispatch = useDispatch();

	const handleAlertClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		dispatch(closeAlert());
	};
	return (
		<>
			<Snackbar
				open={isOpen}
				autoHideDuration={2000}
				onClose={handleAlertClose}
			>
				<Alert onClose={handleAlertClose} severity={alertType}>
					{alertMessage}
				</Alert>
			</Snackbar>
			{children}
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	alertType: selectAlertType,
	alertMessage: selectAlertMessage,
	isOpen: selectAlertIsOpen,
});

export default connect(mapStateToProps)(SuccessMessage);
