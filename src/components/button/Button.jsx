import {React, useState} from 'react'
import "./ButtonStyle.css"

export const Button = (props) => {
    const [activeOption, setActiveOption] = useState("experience");

    return (
        <div className={props.className} onClick={props.onClick}>
            {props.name}
        </div>
    )
}
