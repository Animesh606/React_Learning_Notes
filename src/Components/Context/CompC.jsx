import React from "react";
import { FirstName, LastName } from "./CompA";

const CompC = () => {
    return (
        <FirstName.Consumer>
            {(fname) => {
                return (
                    <LastName.Consumer>
                        {(lname) => {
                            return <h1>Hi I am {fname} {lname}</h1>
                        }}
                    </LastName.Consumer>
                );
            }}
        </FirstName.Consumer>
    );
}

export default CompC;