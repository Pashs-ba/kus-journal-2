import "../style/base.sass"
import {Form} from "../components/UI/form/Form";
import {FormElement} from "../types";
import {InputElement} from "../types/input";
import {URL} from "../config";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router";

export function Login() {
    const [showError, showErrorChange] = useState(false);
    const navigate = useNavigate();
    const send = (data: any) => {
        axios.post(URL + "/login", data).then((response) => {
            console.log("yes")
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/")
        }).catch(() => {
            showErrorChange(true)
        })
    }
    let elements = [
        {field: {type: "text"}, label: "Логин", return_name: "login"} as FormElement<InputElement>,
        {field: {type: "password"}, label: "Пароль", return_name: "password"} as FormElement<InputElement>
    ]
    return (
        <div className=" d-flex justify-content-center align-items-center full-height">
            <div className="card">
                <div className="card-body">
                    {showError ? (
                        <div className={"alert alert-danger"}>
                            Неправильный логин или пароль
                        </div>) : ""
                    }
                    <Form elements={elements}
                          send={send}/>
                </div>
            </div>
        </div>
    )
}