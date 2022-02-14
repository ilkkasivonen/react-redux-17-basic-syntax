import { Link, Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { login, logout } from "./slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

export const UserContext = createContext();

const Layout = () => {
    const user = useSelector((state) => state.login.value);
    const [useri, setUser] = useState("");
    const dispatch = useDispatch();

    return (
        <>
            <UserContext.Provider value={useri}>
                <div>
                    <button
                        onClick={() => {
                            user
                                ? dispatch(logout())
                                : dispatch(login("Kekkonen"));
                            useri ? setUser("") : setUser("Kekkonen");
                        }}
                    >
                        {user ? "Logout" : "Login"}
                    </button>
                </div>
                <Link to="/counter">Redux counter /w Middleware(s)</Link>
                <br />
                <Link to="/hookuser">
                    Hook user /w Private route & Context provider
                </Link>
                <br />
                <Link to="/exercises">Basic Hooks</Link>
                <br />

                <Outlet></Outlet>
            </UserContext.Provider>
        </>
    );
};

export default Layout;
