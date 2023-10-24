import React from "react";
import { Link } from "react-router-dom";

export default function Projects({name, link, img, altText}) {
    return (
        <div>
            <section>
                <h3>{name}</h3>
                <Link to={link}/>
                <img src={img} alt={altText}/>
            </section>
        </div>
    )
}
