
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {UserContext} from "./Context";
import * as React from "react";

class App extends React.Component{
    constructor(props: any) {
        super(props);
        document.documentElement.setAttribute("data-bs-theme", localStorage.getItem("theme") as string)
    }
    render() {
        return (
            <UserContext.Provider value={JSON.parse(localStorage.getItem("user") as string)}>
                <div className="App">
                    <RouterProvider router={router}/>
                </div>
            </UserContext.Provider>
        );
    }
}

export default App;
