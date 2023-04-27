import {User} from "../types";
import {MainPageLink} from "../components/base_components/MainPageLink";
import "../style/base.sass"

export function EmptyPage() {
    const user = JSON.parse(localStorage.getItem("user") as string).user as User
    const competition_page = user.role.includes("submitor") ? (
        <MainPageLink path={"/"} user_name={"Список соревнований"}/>
    ) : ""
    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center full-height"}>
                <div className="col-2">
                    {competition_page}
                </div>
            </div>

        </div>
    )
}