import React, { useState } from "react";

const ControlledForm = () => {
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phone : ""
    });
    const changeData = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {...preValue, [name] : value};
        })
    }
    const submitForm = (event) => {
        event.preventDefault();
        document.getElementById('display').style.display = 'block';
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" name="firstName" placeholder="Enter your First Name" value={data.firstName} onChange={changeData} />
                <input type="text" name="lastName" placeholder="Enter your Last Name" value={data.lastName} onChange={changeData} />
                <input type="email" name="email" placeholder="Enter your Email Id" value={data.email} onChange={changeData} />
                <input type="number" name="phone" placeholder="Enter your Mobile No." value={data.phone} onChange={changeData}/>
                <button type="submit">Submit</button>
            </form>
            <div id="display" style={{display : 'none'}}>
                Name : {data.firstName} {data.lastName} <br/>
                email : {data.email} <br/>
                Mobile : {data.phone} <br/>
            </div>
        </>
    )
}

export default ControlledForm;