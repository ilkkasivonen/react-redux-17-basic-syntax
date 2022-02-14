import { useSelector } from "react-redux";

const RUSer = () => {
    const user = useSelector((state) => state.login.value);

    return (
        <>
            <div>
                {user ? "Logged in Redux user: " + user : "Not logged in"}
            </div>
        </>
    );
};

export default RUSer;
