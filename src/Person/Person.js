import React from 'react'
import  Radium  from "radium";

import './Person.css'

const person = (props) => {
    return (
        <div  className="Person">
            <p onClick={props.click}>Hi! I am {props.name}, {props.age} y/o.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )

}

export default Radium(person);