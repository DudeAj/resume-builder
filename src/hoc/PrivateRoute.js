import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("resume-token") ? (
                    <React.Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}


export default PrivateRoute;