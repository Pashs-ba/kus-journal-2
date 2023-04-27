import {redirect} from "react-router";

export function LoginRequired(){
    const user = JSON.parse(localStorage.getItem("user") as string)
    if (!user){
        return redirect("/login")
    }
    return null;
}

export function AnonymOnly(){
    const user = JSON.parse(localStorage.getItem("user") as string)
    if (user){
        return redirect("/")
    }else{
        return null;
    }
}