
export interface FormElement<element_type> {
    field: element_type,
    return_name: string,
    label: string,
    bottom_text?: string,
}

export interface User{
    role: string[],
    login: string,
    password: string,
    name: string,
    surname: string,
    school_id: number,
    id: number
}