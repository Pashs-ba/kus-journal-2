import * as React from "react";
import {UserContext} from "../../Context";
export class MainHeader extends React.Component {
    changeTheme(){
        if (document.documentElement.getAttribute("data-bs-theme") === "light"){
            document.documentElement.setAttribute("data-bs-theme", "dark")
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.setAttribute("data-bs-theme", "light")
            localStorage.setItem("theme", "light")
        }

    }
    render() {
        return (
            <nav className="navbar bg-light-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">KusJournal</a>
                    <div className="d-flex">
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