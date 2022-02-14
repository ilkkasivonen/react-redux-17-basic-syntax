import { Link, Outlet } from "react-router-dom";

const Exercises = () => {
    return (
        <>
            <Link to="/exercises/filter">Filter</Link>
            {" | "}
            <Link to="/exercises/statecounter">Basic Counter /w hook</Link>
            {" | "}
            <Link to="/exercises/hideshow">Click to show/hide</Link>
            {" | "}
            <Link to="/exercises/form">Form</Link>
            {" | "}
            <Link to="/exercises/pokemons">Use Effect</Link>
            <Outlet></Outlet>
        </>
    );
};

export default Exercises;
