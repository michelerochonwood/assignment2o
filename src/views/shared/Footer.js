import React, { useContext } from "react";
import { CounterContext } from "../../App";

function Footer() {

    const { sessionCounter } = useContext(CounterContext);

    return (
        <div className="bg-secondary text-center text-light fixed-bottom p-3">
            <p>&copy; 2023 | COMP2112 | Assignment 2 Rochon-Wood</p>
            <p>Total Session Clicks: <span id="sessionCounter">{sessionCounter}</span></p>
        </div>
    );
}

export default Footer;
