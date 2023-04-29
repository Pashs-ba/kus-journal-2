import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {Login} from "../pages/Login";
import {AnonymOnly, LoginRequired} from "./Guards";
import {CompetitionSelect} from "../pages/competition/CompetitionSelect";
import {CompetitionPage} from "../pages/competition/CompetitionPage";
import {BasePage} from "../pages/BasePage";
import {Page404} from "../pages/Page404";
import {ProblemPage} from "../pages/competition/ProblemPage";

export const RouterName = {
    Base: "/",
    Login: "/login",
    CompetitionSelect: "/competition",
    CompetitionPage: (id = -1)=>{return id !== -1?"/competition/"+id:"/competition/:competition_id"},
    ProblemPage: (id = -1)=>{return id !== -1?"problem/"+id:"problem/:problem_id"}
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
                element: <CompetitionPage/>,
                children: [
                    {
                        path: RouterName.ProblemPage(),
                        loader: LoginRequired,
                        element: <ProblemPage/>
                    }
                ]
            },
            {
                path: '*',
                element: <Page404/>
            }
        ]
    },

]);
