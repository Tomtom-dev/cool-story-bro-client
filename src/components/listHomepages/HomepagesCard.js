import React from 'react'
import {Link} from "react-router-dom"

export default function HomepagesCard(props) {

    const { title, description, bgcolor, color } = props;
    return (
        <div style={{ backgroundColor:bgcolor, color:color, minWidth: "400px",width:"40%", marginLeft:"15%"}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to={`/homepages/${props.id}`}>
            <button>Visit page </button>
            </Link>
            
        </div>
    )
}
