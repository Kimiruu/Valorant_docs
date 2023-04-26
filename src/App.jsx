import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage";
import Agents from "./pages/Agents";
import Agent from "./pages/Agent";
import Maps from "./pages/Maps";
import Navbar from "./compoments/Navbar";
import Arsenals from "./pages/Arsenals";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/agents" element={<Outlet />}>
                        <Route path="/agents" element={<Agents />} />
                        <Route path="/agents/:name" element={<Agent />} />
                    </Route>
                    <Route path="/arsenal" element={<Arsenals />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
