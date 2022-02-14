import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Layout";
import Nope from "./Nope";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // This is not really security, but UX. UI is not where any form of security can be created.
    const user = useContext(UserContext);

    return user ? <Outlet /> : <Nope />;
};

export default PrivateRoute;
