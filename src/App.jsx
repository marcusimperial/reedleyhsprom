import AppContext from "./Context";
import { Routes, Route } from 'react-router-dom';
import Pages from './Pages';
import Home from './Home';
import Login from './Login';
import { useEffect } from "react";

const App = () => {

    useEffect(() => {document.title = "Prom"}, []);

    return (
        <AppContext>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="" element={<Home/>} />
                <Route path="*" element={<Pages/>} />
            </Routes>
        </AppContext>
    );
};

export default App;