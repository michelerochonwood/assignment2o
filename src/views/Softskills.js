import React, { useEffect } from "react";

function SoftSkills () {

    useEffect(()=> {
        document.title='SoftSkills';
    }, []);
    
    return (
        <section className= "container">
        <h1>This is the about component.</h1>
        </section>
    );
}

export default SoftSkills;