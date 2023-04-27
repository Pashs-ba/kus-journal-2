import {User} from "../types";
import {MainPageLink} from "../components/base_components/MainPageLink";
import "../style/base.sass"
import {ColBlock} from "../components/UI/ColBlock";

export function EmptyPage() {
    const user = JSON.parse(localStorage.getItem("user") as string).user as User
    const competition_page = user.role.includes("submitor") ? (
        <MainPageLink path={"/"} user_name={"Список соревнований"}/>
    ) : ""

    return (
        <div>
            <ColBlock elements={[competition_page]}/>
        </div>
    )
}