export interface LanguageState {
    language: string;
}

export enum LanguageActionEnum {
    SET_LANGUAGE = 'SET_LANGUAGE',
}

export interface SetLanguageAction {
    type: LanguageActionEnum.SET_LANGUAGE;
    payload: string;
}

export type LanguageAction = SetLanguageAction;