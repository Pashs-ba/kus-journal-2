import {SimpleCardLink} from "../components/UI/SimpleCardLink";
import "../style/base.sass"
import {ColBlock} from "../components/UI/ColBlock";
import {GetUser} from "../utils";
import {RouterName} from "../router";

export function MainPage() {
    const user = GetUser()
    const competition_page = user.role.includes("submitor") ? (
        <SimpleCardLink path={RouterName.CompetitionSelect} user_name={"Список соревнований"}/>
    ) : ""
    return (
        <div>
            <ColBlock elements={[competition_page]}/>
        </div>
    )
}