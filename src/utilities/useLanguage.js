import React, {useState} from "react";

export const useLanguage = ( a ) => {
    const [language, setLanguage] = useState('en');
    setLanguage(a ? 'en': 'es');
    return language;
}
