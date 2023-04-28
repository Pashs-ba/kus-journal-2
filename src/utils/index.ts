import {User} from "../types/schema";

export function GetUser(): User{
    return JSON.parse(localStorage.getItem("user") as string).user as User
}