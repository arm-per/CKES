export const getLanguage = () => {
    const lang = document.documentElement.lang;
    return lang === "en";
}

export const changeLanguage = () => {
    const currentLanguage = getLanguage();
    return document.documentElement.setAttribute("lang", currentLanguage? "es": "en");
}
