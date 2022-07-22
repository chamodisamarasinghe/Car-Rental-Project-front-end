import React from "react";
import Login from "../pages/sessions/Login";
import {Routes, Route} from "react-router-dom";
import DashBoard from "../pages/sessions/DashBoard";
import Customer from "../pages/sessions/Customer"
import AddVehicle from "../pages/sessions/AddVehicle"
import Sidebar from "../components/Sidebar"
import SignUp from "../pages/sessions/SignUp"

function App() {
    return (

        <Routes>
            <Route exact path='/' element={<DashBoard/>}/>
            <Route path="customer" element={<Customer/>}/>
            <Route path="addVehicle" element={<AddVehicle/>}/>
            <Route path="sidebar" element={<Sidebar/>}/>
            <Route path="signup" element={<SignUp/>}/>
        </Routes>
    );
}

export default App;