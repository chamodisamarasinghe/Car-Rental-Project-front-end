import React from "react";
import Login from "../pages/sessions/Login";
import {Routes, Route} from "react-router-dom";
import DashBoard from "../pages/sessions/DashBoard";
import Customer from "../pages/sessions/Customer"

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<DashBoard/>}/>
            <Route path="customer" element={<Customer/>}/>
        </Routes>
    );
}

export default App;