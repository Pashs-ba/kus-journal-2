import React from "react";

interface FormWrapperInterface {
    label: string,
    bottom_text?: string,
    children?: React.ReactNode
}

export function FormWrapper({
                                label,
                                bottom_text,
                                children
                            }: FormWrapperInterface) {
    let form_text = bottom_text?(<div className={"form-text"}>{bottom_text}</div>):"";
    return (
        <div className={"mb-3"}>
            <label className={"form-label"}>{label}</label>
            {children}
            {form_text}
        </div>
    )
}