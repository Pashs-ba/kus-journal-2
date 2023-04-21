import * as React from "react";
import {UserContext} from "../../Context";
interface User{
    name: string,
    surname: string,
    id: number,
    roles: string[]
}
export class MainHeader extends React.Component {
    changeTheme(){
        if (document.documentElement.getAttribute("data-bs-theme") === "light"){
            document.documentElement.setAttribute("data-bs-theme", "dark")
        }else{
            document.documentElement.setAttribute("data-bs-theme", "light")
        }

    }
    render() {
        const user = this.context as User
        return (
            <nav className="navbar bg-light-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">KusJournal</a>
                    <div className="d-flex">
                        <div>{user.name}</div>
                        <button type="button" className="btn btn-outline-primary btn-sm rounded-circle" onClick={this.changeTheme}>
                            <i className="bi bi-moon-stars-fill"></i>
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}
MainHeader.contextType = UserContext;