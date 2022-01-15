import React from "react";
import arrow from "Assets/arrow.svg";

const ActionButton = ({children}) => {

    return (
        <button className="banner-action">
            {
                children
            }
            <img src={arrow} alt="arrow"/>
        </button>
    )
}

export default ActionButton;
