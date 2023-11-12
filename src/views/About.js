import React, { useEffect } from "react";

function About () {

    useEffect(()=> {
        document.title='About';
    }, []);
    
    return (
        <section className= "container">
        <h1>This is the about component.</h1>
        </section>
    );
}

export default About;