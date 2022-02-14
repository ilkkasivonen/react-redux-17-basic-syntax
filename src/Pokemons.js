import { useState, useEffect } from "react";

const Pokemons = () => {
    let [pokemons, updatePokes] = useState([]);

    useEffect(() => {
        let isMounted = true;

        async function updatedPokemons() {
            let response = await fetch("https://pokeapi.co/api/v2/berry/");
            let pokes = await response.json();
            console.log(pokes);
            if (isMounted) updatePokes(pokes);
        }
        updatedPokemons();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            <div>{pokemons ? JSON.stringify(pokemons) : ""}</div>
        </>
    );
};

export default Pokemons;
