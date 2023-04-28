import {MainHeader} from "../components/base_components/MainHeader";
import * as React from "react";
import {Outlet} from "react-router";

export function BasePage(){
    return (
        <div>
            <MainHeader/>
            <Outlet/>
        </div>
    )
}