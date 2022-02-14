import { useState } from "react";

const StateCounter = () => {
    let [calc, calcNumber] = useState(0);

    return (
        <>
            <div id="result">{calc}</div>
            <button onClick={() => calcNumber(calc + 1)}> + </button>
            <button onClick={() => calcNumber(calc - 1)}> - </button>
        </>
    );
};

export default StateCounter;
