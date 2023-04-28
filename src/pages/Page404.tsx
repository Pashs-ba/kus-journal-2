import "../style/base.sass"
import {Link} from "react-router-dom";
import {RouterName} from "../router";

export function Page404() {
    return (
        <div className={"d-flex justify-content-center align-items-center full-height"}>
            <div className={"text-center"}>
                <h2 className={"display-4"}>Такой страницы не сущестует.</h2>
                <p>Вы можете верниться на <Link to={RouterName.Base}>домашнюю страницу</Link>.<br/>
                    Обязательно <a href="https://t.me/kussystembot">сообщите нам</a>, если вы попали сюда через ссылку на этом сайте
                </p>
            </div>
        </div>)
}