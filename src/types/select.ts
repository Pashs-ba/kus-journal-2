interface Option {
    value: string,
    inner_data: string,
    select?: boolean,
    disabled?: boolean,
}

export interface SelectElement {
    id?: string,
    multiple?: boolean,
    disabled?: boolean,
    additionalClass?: string,
    options: Option[]
}