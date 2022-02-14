import { useState } from "react";

const allFruits = ["Apples", "Oranges", "Bananas"];

const Filter = () => {
    const [fruits, filterFruits] = useState(allFruits);

    const filterFruitsa = (e) => {
        const input = e.target.value;
        filterFruits(
            allFruits.filter((fruit) => {
                return fruit.toLowerCase().includes(input.toLowerCase());
            })
        );
    };
    return (
        <>
            {" "}
            <div>
                <input type="text" onChange={filterFruitsa}></input>
                {fruits.map((fruit) => (
                    <p key={fruit}>{fruit}</p>
                ))}
            </div>
        </>
    );
};

export default Filter;
