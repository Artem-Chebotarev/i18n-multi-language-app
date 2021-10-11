import { LanguageAction, LanguageActionEnum } from "../../types/language"

export const setLanguage = (language: string): LanguageAction => {
    localStorage.setItem('language', language);

    return {
        type: LanguageActionEnum.SET_LANGUAGE,
        payload: language,
    }
}