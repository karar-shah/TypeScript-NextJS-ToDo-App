"use client";
import React, { useState } from "react";

export default function Counter() {
    const st = {
        border: "2px solid cyan",
        padding: "8px 20px",
        margin: "5px",
    };
    const [valu, setCounter] = useState(0);

    const increment = (num: number) => {
        setCounter(valu + num);
    };
    const decrement = (num: number) => {
        setCounter(valu - num);
    };
    const resetCount = () => {
        setCounter(0);
    };

    return (
        <>
            <center>
                <h1 style={{ color: "grey" }}>Counter</h1>

                <button
                    style={{
                        border: "2px solid grey",
                        padding: "7px 20px",
                        margin: "5px",
                    }}
                    onClick={resetCount}
                >
                    Reset Counter
                </button>

                <br></br>
                <button onClick={() => decrement(3)} style={st}>
                    Decrement by 3
                </button>
                <button onClick={() => decrement(2)} style={st}>
                    Decrement by 2
                </button>
                <button onClick={() => decrement(1)} style={st}>
                    Decrement
                </button>

                {valu}

                <button style={st} onClick={() => increment(1)}>
                    Increment
                </button>
                <button style={st} onClick={() => increment(2)}>
                    Increment by 2
                </button>
                <button style={st} onClick={() => increment(3)}>
                    Increment by 3
                </button>
            </center>
        </>
    );
}
