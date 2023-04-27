import {createBrowserRouter} from "react-router-dom";
import {EmptyPage} from "../pages/EmptyPage";
import {Login} from "../pages/Login";
import {AnonymOnly, LoginRequired} from "./Guards";


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
    }
]);