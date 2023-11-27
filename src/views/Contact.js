import React, { useState, useEffect } from "react";

function Contact () {
    
    useEffect(()=> {
        document.title='Contact';
    }, []);
    
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (event) => {
        setMessage(event.target.value)
        if (message === '') {
            setErrorMessage('Message is required');
        }
        else {
            setErrorMessage(null);
        }
    }

    const showMessageAlert = () => {
        if (message === '') {
            setErrorMessage('Message is required');
        }
        else {
            alert(message);
        }
    }

    return(


    <div className="container">
        <h1>Contact Michele</h1>
        <p>tel: 613 716 6393</p>
        <textarea placeholder="Send a message" onChange={handleChange}>{message}</textarea>
        l<div id="errorMessage" className="text-danger">{errorMessage}</div>
        <button className="btn btn-secondary" onClick={showMessageAlert}>submit</button>
        <p>Your message is: {message} </p>
    </div>);
}

export default Contact;