import { useContext } from "react";
import { UserContext } from "./Layout";

const HookUser = () => {
    const useri = useContext(UserContext);
    return (
        <>
            <div>Logged in hook user: {useri}</div>
        </>
    );
};

export default HookUser;
