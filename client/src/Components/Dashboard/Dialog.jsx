import React from "react";

const Dialog = ({ open, onOpenChange, children }) => {
    if (!open) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                {children}
                <button className="dialog-close" onClick={() => onOpenChange(false)}>
                    ✖
                </button>
            </div>
        </div>
    );
};

export default Dialog;
