import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {Login} from "../pages/Login";
import {AnonymOnly, LoginRequired} from "./Guards";
import {CompetitionSelect} from "../pages/competition/CompetitionSelect";
import {CompetitionPage} from "../pages/competition/CompetitionPage";
import {BasePage} from "../pages/BasePage";

export const RouterName = {
    Base: "/",
    Login: "/login",
    CompetitionSelect: "/competition",
    CompetitionPage: (id = -1)=>{return id !== -1?"/competition/"+id:"/competition/:id"}
}
export const router = createBrowserRouter([
    {
        path: RouterName.Base,
        loader: LoginRequired,
        element: <BasePage/>,
        children:[
            {
                path: '',
                loader: LoginRequired,
                element: <MainPage/>
            },
            {
                path: RouterName.Login,
                loader: AnonymOnly,
                element: <Login/>
            },
            {
                path: RouterName.CompetitionSelect,
                loader: LoginRequired,
                element: <CompetitionSelect/>
            },
            {
                path: RouterName.CompetitionPage(),
                loader: LoginRequired,
                element: <CompetitionPage/>
            }
        ]
    },

]);
