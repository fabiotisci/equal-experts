export type ButtonType = 'CLEAR' | 'DELETE' | 'VALUE' | 'OPERATOR' | 'EQUALS';

export interface IButton {
    label: string;
    classes: string[];    
    type: ButtonType
}
