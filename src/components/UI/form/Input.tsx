import * as React from "react";
import {FormEventHandler} from "react";

interface InputInterface {
    id?: string,
    type: string,
    onInput: FormEventHandler<HTMLInputElement>,
    additionalClass?: string,
    children?: React.ReactNode
}

export function Input({
                          id,
                          type,
                          onInput,
                          additionalClass,
                      }: InputInterface) {
    return (<input id={id} type={type} onInput={onInput} className={additionalClass?"form-control "+additionalClass: "form-control"}/>)
}