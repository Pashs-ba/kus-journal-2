import {createBrowserRouter} from "react-router-dom";
import {EmptyPage} from "../pages/EmptyPage";
import {Login} from "../pages/Login";
import {AnonymOnly, LoginRequired} from "./Guards";
import {CompetitionSelect} from "../pages/competition/CompetitionSelect";


export const router = createBrowserRouter([
    {
        path: "/",
        loader: LoginRequired,
        element: <EmptyPage/>,
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
    }
]);