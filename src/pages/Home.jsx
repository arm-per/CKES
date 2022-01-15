import React from "react";
import SectionBanner from "Components/SectionBanner";
import bg from "Assets/main-banner.jpg";
import ActionButton from "Components/ActionButton";

const Home = () => {

    return  (
        <SectionBanner
            bg={bg} >
            <h1>Commercial <br/> Kitchen <br/>Services</h1>
            <ActionButton>Contáctanos</ActionButton>
        </SectionBanner>
    )
}

export default Home;
