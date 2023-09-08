import {Route, Routes} from "react-router-dom"
import Main from "./Main"
import "./App.css"
import Header from "./Components/Header/Header";
import Component from "./Components/Component";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/main" element={ <Main/> }/>
                <Route path="/component" element={ <Component/> }/>
            </Routes>
        </div>
    );
}

export default App
