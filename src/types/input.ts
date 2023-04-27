export interface InputElement {
    id?: string,
    type: string,
    additionalClass?: string,
}

export function IsInput(el: any): el is InputElement {
    return el.type !== undefined;
}