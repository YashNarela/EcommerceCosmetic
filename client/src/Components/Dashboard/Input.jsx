import React from "react";


const Input = ({ type = "text", name, value, onChange, required, accept }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            accept={accept}
            className="custom-input"
        />
    );
};

export default Input;
