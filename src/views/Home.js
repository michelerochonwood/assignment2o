
import React, { useState, useEffect, useContext } from 'react';
import { CounterContext } from "../App";



function Home (User) { /*this tells home page that it must have a user*/

const { handleIncrement } = useContext(CounterContext);

useEffect(()=> {
    document.title='Home';
}, []);

const [count, setCount] = useState(0); /*this sets the default count for the counter*/

const updateCount = () => {
    setCount(count + 1);
    handleIncrement();
}

const resetCount = () => {
    setCount(0);
}
return(
    <div className="container">
        <h1>Welcome to Michele's career profile, {User.displayName}.</h1>
        <div><p>Count: <span>{count}</span></p>
            <button class="btn btn-secondary" onClick={updateCount}>click me</button>
            <button class="btn btn-secondary" onClick={resetCount}>reset</button>
            </div>
    </div>);
}

export default Home;