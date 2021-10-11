import en from "./en.json";
import de from "./de.json";
import fr from "./fr.json";
import ru from "./ru.json";

export const translate = (key: string, language: string): string => {
    let languageData: { [key: string]: string } = {};

    if (language === 'EN' || language === '') {
        languageData = en;
    } else if (language === 'DE') {
        languageData = de;
    } else if (language === 'FR') {
        languageData = fr;
    } else if (language === 'RU') {
        languageData = ru;
    }

    return languageData[key];
}