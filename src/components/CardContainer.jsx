import React from "react";
import "Styles/sections.scss";

const CardContainer = ({children, icon, title}) => {

    return (
        <section className={"container"}>
            <div className={"section__icon"}>
                <img src={icon} alt={`${title}-icon`}/>
            </div>
            <h2 className={"section__title"}>{title}</h2>
                {
                    children
                }
        </section>

    )
}

export default CardContainer;
