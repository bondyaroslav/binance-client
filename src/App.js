import {Route, Routes} from "react-router-dom"
import Main from "./Main"
import "./App.css"
import Header from "./Components/Header/Header";
import Component from "./Components/Component";
import Statistics from "./Statistics";
import Trading from "./Trading";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/main" element={ <Main/> }/>
                <Route path="/trading" element={ <Trading/> }/>
                <Route path="/statistics" element={ <Statistics/> }/>
            </Routes>
        </div>
    );
}

export default App
