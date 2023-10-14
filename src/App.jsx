import './App.css'
import {Home} from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Partner} from "./pages/Partner";
import {Search} from "./pages/Search";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/partner"} element={<Partner/>}/>
                    <Route path={"/search"} element={<Search/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
