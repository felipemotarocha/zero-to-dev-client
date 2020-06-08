import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

import Snackbar from "@material-ui/core/Snackbar";

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const AlertMessage = () => {
	const [alertOpen, setAlertOpen] = useState(false);
	const handleAlertClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setAlertOpen(false);
	};
	return (
		<Snackbar
			open={alertOpen}
			autoHideDuration={5000}
			onClose={handleAlertClose}
		>
			<Alert onClose={handleAlertClose} severity="success">
				A nota foi adicionada com sucesso!
			</Alert>
		</Snackbar>
	);
};

export default AlertMessage;
