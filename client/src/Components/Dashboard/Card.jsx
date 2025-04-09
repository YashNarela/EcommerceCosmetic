import React from "react";


const Card = ({ children, className, onClick }) => {
    return (
        <div className={`custom-card ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
