import React from "react";
import "Styles/sections.scss";
import {Link} from "react-router-dom";

const SolutionCard = ({title, image, description}) => {

    return (
        <article className="section__card">
            <div className="section__card-container">
                <div className="section__card-image">
                    <img src={image} alt={`${title}-img`}/>
                </div>
                <div className="section__card-text">
                    <h4 className="section__card-title">{title}</h4>
                    <p className="section__card-paragraph">
                        {
                            description
                        }
                    </p>
                    <Link className="section__card-button" to={"/"}>Ask for this</Link>
                </div>
            </div>
        </article>
    )
}

export default SolutionCard;
