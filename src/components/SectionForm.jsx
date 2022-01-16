import React from "react";
import "Styles/sections.scss"

const SectionForm = () => {

    return (
        <form className="section__form">
            <div className="container">
                <h2 className={"section__form-title"}>Give us your information and we'll contact you</h2>
                <div>
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="name" id="name" placeholder={"Eg. John Peterson"}/>
                </div>
                <div>
                    <label htmlFor="company">Company name</label>
                    <input type="text" name="company" id="company" placeholder={"Eg. Peterson and Burgers"}/>
                </div>
                <div>
                    <label htmlFor="phone">Mobile phone</label>
                    <input type="phone" name="phone" id="phone" placeholder={"Eg. 913 5555 4321"}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder={"Eg. myemail@mail.com"} name="email" id="email"/>
                </div>
                <input type="submit" className="section__button-form" value={"I want to be contacted"}/>
            </div>
        </form>
    )
}

export default SectionForm;
