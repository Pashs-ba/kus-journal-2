import {createBrowserRouter} from "react-router-dom";
import {EmptyPage} from "../pages/EmptyPage";
import {Login} from "../pages/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <EmptyPage/>,
    },
    {
        path: "/login",
        element: <Login/>
    }
]);