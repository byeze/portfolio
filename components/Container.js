import React from "react";

export default function Container({ children, className }) {
    return (
        <div className={`p-10 md:p-16 my-4 ${className ? className : ""}`}>
            {children}
        </div>
    );
}
