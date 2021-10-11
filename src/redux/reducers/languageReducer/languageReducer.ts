import { LanguageAction, LanguageActionEnum, LanguageState } from "../../../types/language";

const localStorageLanguage = localStorage.getItem('language');

const initStateLanguage: LanguageState = {
    language: localStorageLanguage ? localStorageLanguage : '',
}

const languageReducer = (state = initStateLanguage, action: LanguageAction): LanguageState => {
    switch (action.type) {
        case LanguageActionEnum.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            }

        default:
            return state;
    }

}

export default languageReducer;