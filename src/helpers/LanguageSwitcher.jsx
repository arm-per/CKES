import React, { useState } from "react";
import { changeLanguage } from "Utilities/index.js";

const LanguageSwitcher = ({className}) => {

    const [language, setLanguage] = useState(true);

    const languageHandler = () => {
        setLanguage(!language);
        changeLanguage();
    }
    return (
        <button onClick={languageHandler} className={className}>
            {
                language ? "Español" : "English"
            }
        </button>
    )
}

export default LanguageSwitcher;

