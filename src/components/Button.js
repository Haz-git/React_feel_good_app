import React from 'react';

const Button = ({ apiRequest }) => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log("The user has clicked the button");
        apiRequest();
    }

    return (
        <button className="massive ui button" onClick={handleClick}>Click Me!</button>
    )
}

export default Button;