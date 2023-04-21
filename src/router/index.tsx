import {createBrowserRouter} from "react-router-dom";
import {EmptyPage} from "../components/base_components/EmptyPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <EmptyPage/>,
    },
]);