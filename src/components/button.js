import React from 'react';

const Button = ({text, buttonClass = '', clickHandler}) => {
    return (
        <button className={buttonClass} onClick={clickHandler}>
            <span className="title">{text}</span>
        </button>
    )
}

export default Button;
