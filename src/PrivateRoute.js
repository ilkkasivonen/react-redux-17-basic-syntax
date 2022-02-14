import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Layout";
import Nope from "./Nope";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Add your own authentication on the below line.
    const user = useContext(UserContext);

    return user ? <Outlet /> : <Nope />;
};

export default PrivateRoute;
