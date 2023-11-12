import React, { useEffect } from "react";
//define a list of services

let services = ["Web Design", "Programming", "Logo Design", "SEO"];

function Services () {
    useEffect(()=> {
        document.title='Services';
    }, []);

    return(
    <div className="container">
        <h1>This is the services component.</h1>
        <p>We provide services including:
            <ul>
                {services.map((service) => (
                    <li className="list-group-item" key={service}>
                        <i class="bi bi-tools"></i>{service}</li>
                ))}
            </ul>
        </p>
    </div>);
}

export default Services;