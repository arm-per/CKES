import React from "react";

const MenuButton = ({onClick, className}) => {


    const activeHandler = () => {
        onClick();
    }

    return (
        <button onClick={activeHandler} className={`menu-btn ${className}`}>

        </button>
    );
}

export default MenuButton;
