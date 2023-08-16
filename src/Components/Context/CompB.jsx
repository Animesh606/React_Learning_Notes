import React, { useContext } from "react";
import CompC from "./CompC";
import { FirstName, LastName } from "./CompA";

const CompB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            <h1>Hi I am {fname} {lname}</h1>
            <CompC/>
        </>
    );
}

export default CompB;