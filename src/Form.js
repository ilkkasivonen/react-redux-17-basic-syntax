import { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({
        userName: undefined,
        email: undefined,
        password: undefined,
    });

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setUser({
                        ...user,
                        userName: e.target.elements.name.value,
                        email: e.target.elements.email.value,
                        password: e.target.elements.pwd.value,
                    });
                }}
            >
                Login
                <input name="name" type="text" placeholder="Name"></input>
                <input
                    name="email"
                    type="email"
                    placeholder="name@where.com"
                ></input>
                <input name="pwd" type="password"></input>
                <input type="submit" value="Login"></input>
                <div>{JSON.stringify(user)}</div>
            </form>
        </>
    );
};

export default Form;
