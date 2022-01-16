import React from "react";
import {Link} from "react-router-dom";
import arrow from "Assets/arrow.svg";

const ActionButton = ({children}) => {

    return (
        <Link to={"/contact"} className="banner-action">
            {
                children
            }
            <img src={arrow} alt="arrow"/>
        </Link>
    )
}

export default ActionButton;
