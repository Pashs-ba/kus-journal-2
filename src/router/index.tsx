import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {Login} from "../pages/Login";
import {AnonymOnly, LoginRequired} from "./Guards";
import {CompetitionSelect} from "../pages/competition/CompetitionSelect";
import {CompetitionPage} from "../pages/competition/CompetitionPage";


export const router = createBrowserRouter([
    {
        path: "/",
        loader: LoginRequired,
        element: <MainPage/>,

    },
    {
        path: "/login",
        loader: AnonymOnly,
        element: <Login/>
    },
    {
        path: "/competition",
        loader: LoginRequired,
        element: <CompetitionSelect/>
    },
    {
        path: "/competition/:id",
        loader: LoginRequired,
        element: <CompetitionPage/>
    }
]);