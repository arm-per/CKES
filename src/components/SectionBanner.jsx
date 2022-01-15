import React from "react";
import "Styles/sectionbanner.scss";

const SectionBanner = ({bg, children}) => {

    const background = {
        "backgroundImage": `url(${bg})`,
        "backgroundSize": "cover",
        "backgroundPosition": "center",
    }

    return (
        <section className={"top-banner"}>
            <div className="container-full">
                <div className="top-banner__area" style={background}>
                    <img src="" alt=""/>
                    {
                        children
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionBanner;
