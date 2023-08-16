import React from "react";
import Heading from "./Heading";
import Link from "./Link";

const StudentCard = (prompt) => {
    return (
        <>
            <Heading val={prompt.name}/>
            <p>My name is {prompt.name}. I am a Student of {prompt.dept} department. My Roll no. is {prompt.roll}.</p>
            <Link name='Codeforces Id' link={prompt.codeForceId}/>
        </>
    )
}

export default StudentCard;