import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const IncCount = () => setCount(count + 1);
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    setInterval(updateTime, 1000);
    return (
        <>
            <h1>{count}</h1>
            <h1>{time}</h1>
            <button onClick={IncCount}>Click Me</button>
        </>
    );
}

export default Hooks;