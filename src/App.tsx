import {MainHeader} from "./components/base_components/MainHeader";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {UserContext} from "./Context";
import * as React from "react";

class App extends React.Component{
    render() {
        return (
            <UserContext.Provider value={JSON.parse(localStorage.getItem("user") as string)}>
                <div className="App">
                    <MainHeader/>
                    <RouterProvider router={router}/>
                </div>
            </UserContext.Provider>
        );
    }
}

export default App;
