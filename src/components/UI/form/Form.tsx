import {FormElement} from "../../../types";
import {IsInput} from "../../../types/input";
import {Input} from "./Input";
import React, {useState} from "react";

interface FormProps {
    elements: FormElement<any>[];
    button_text?: string
    send: (data: any) => void
}


export function Form({
                         elements,
                         button_text,
                         send
                     }: FormProps) {
    const [form_value, ChangeFormValue] = useState({} as any)

    const SetElementValue = (return_name: string, value: any) => {
        let tmp = form_value;
        tmp[return_name] = value
        ChangeFormValue(tmp)
    }
    const SelectElement = (element: FormElement<any>) => {
        let field;
        if (IsInput(element.field)) {
            field = (
                <Input type={element.field.type} onInput={(event) => {
                    SetElementValue(element.return_name, event.currentTarget.value)
                }}/>
            )
        }
        return field
    }
    const RenderElement = (element: FormElement<any>, index: number) => {
        let field = SelectElement(element);
        let bottom_text = element.bottom_text ? (<div className={"form-text"}>{element.bottom_text}</div>) : "";
        return (
            <div className={"mb-3"} key={index}>
                <label className={"form-label"}>{element.label}</label>
                {field}
                {bottom_text}
            </div>
        )
    }

    let rendered_elements = []
    for (let i = 0; i < elements.length; i++) {
        rendered_elements.push(RenderElement(elements[i], i))
    }
    return (
        <div>
            {rendered_elements}
            <button className={"btn btn-primary"} onClick={() => {
                send(form_value)
            }}>{button_text ? button_text : "Отправить"}
            </button>
        </div>)

}