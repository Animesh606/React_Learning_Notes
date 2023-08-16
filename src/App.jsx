import React from "react";
import StudentData from "./Components/Prompts/StudentData";
import StudentCard from "./Components/Prompts/StudentCard";
import Hooks from "./Components/Hooks/Hooks";
import ControlledForm from "./Components/Hooks/ControlledForm";
import CompA from "./Components/Context/CompA";
import Routing from "./Components/Router/Routing"

const App = () => {
    const name = 'Animesh';
    const st1 = {
        color: 'black',
        backgroundColor: 'pink',
        borderRadius: '10px'
    }
    const greet = () => {
        const curTime = new Date().getHours();
        if (curTime >= 20)
            return { color: 'blue', time: 'night' };
        if (curTime >= 18)
            return { color: 'yellow', time: 'evening' };
        if (curTime >= 12)
            return { color: 'red', time: 'afternoon' };
        return { color: 'green', time: 'morning' };
    }
    // Using Expression in JSX
    return (
        <>
            <h1>Hello {name}</h1>
            <p>12 * 23 = {12 * 23}</p>
            <p className='number'>{Math.random()}</p>
            <p>{`12 + 23 = ${12 + 23}`}</p>
            {/* inline css  */}
            <p style={st1}>current Date = {new Date().toLocaleDateString()}</p>
            <p style={{ color: 'blue', backgroundColor: 'yellow' }}>current Time = {new Date().toLocaleTimeString()}</p>
            <p style={{ color: 'pink' }}>Hello Sir, <span style={{ color: `${greet().color}` }}>Good {greet().time}</span></p>
            {/* Using components with promps */}
            {StudentData.map((card) => {
                return (<StudentCard key={card.id} name={card.name} roll={card.roll} dept={card.dept} codeForceId={card.codeForceId}/>)
            })}
            {/* UseState hooks in react */}
            <Hooks/>
            <ControlledForm/>
            {/* Use Context creater provider and consumer */}
            <CompA/>
            {/* Routing without refresh */}
            <Routing/>
            
        </>
    );
}

export default App;