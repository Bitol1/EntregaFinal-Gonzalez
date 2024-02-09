import React from "react";

const Button = ({text, onClick}) =>{
    return (
        <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={onClick}>
                {text}
            </button>
        </li>
    );
};
export default Button;