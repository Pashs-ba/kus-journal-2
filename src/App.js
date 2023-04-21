import {MainHeader} from "./components/base_components/MainHeader";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

function App() {
    return (
        <div className="App">
            <MainHeader/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
