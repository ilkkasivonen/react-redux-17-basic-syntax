import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Nope from "./Nope";
import { decrement, increment } from "./slices/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.login.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    disabled={!user}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    disabled={!user}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            {!user ? <Nope /> : ""}
        </div>
    );
}

export default Counter;
