import {SimpleCardLink} from "../components/UI/SimpleCardLink";
import "../style/base.sass"
import {ColBlock} from "../components/UI/ColBlock";
import {GetUser} from "../utils";

export function EmptyPage() {
    const user = GetUser()
    const competition_page = user.role.includes("submitor") ? (
        <SimpleCardLink path={"/competition"} user_name={"Список соревнований"}/>
    ) : ""
    return (
        <div>
            <ColBlock elements={[competition_page]}/>
        </div>
    )
}