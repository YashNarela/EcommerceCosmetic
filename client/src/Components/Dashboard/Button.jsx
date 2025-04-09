import React from "react";


const Button = ({ children, className, onClick, type = "button" }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;
