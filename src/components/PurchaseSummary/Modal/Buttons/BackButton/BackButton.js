import React from 'react';
import "./BackButton.css";

const BackButton = (props) => {
    return (
        <button className="BackButton" onClick={props.clicked}>BACK</button>
    )
}

export default BackButton;