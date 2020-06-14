import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSessionStart } from "../../redux/user/user.actions";
import {
	selectUserError,
	selectUserIsLoading,
} from "../../redux/user/user.selectors";

const Authenticated = ({ children, userError, isLoading }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const authToken = localStorage.getItem("authToken");

	useEffect(() => {
		if (!authToken || userError) {
			history.push("/login");
		}

		dispatch(checkUserSessionStart());
	}, [dispatch, authToken, history, userError]);

	return <div>{isLoading ? "" : children}</div>;
};

const mapStateToProps = createStructuredSelector({
	userError: selectUserError,
	isLoading: selectUserIsLoading,
});

export default connect(mapStateToProps)(Authenticated);
