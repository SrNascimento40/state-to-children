import React, { Dispatch, SetStateAction, useContext } from "react";
import CountContext from "../../context";

export default function GrandChildren() {
    const { count, setCount } = useContext(CountContext);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 2)}>Soma 2</button>
        </>
    );
}
