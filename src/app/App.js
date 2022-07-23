import React from "react";
import Login from "../pages/sessions/Login";
import {Routes, Route} from "react-router-dom";
import DashBoard from "../pages/sessions/DashBoard";
import Customer from "../pages/sessions/Customer"
import AddVehicle from "../pages/sessions/AddVehicle"
import AddCar from "../pages/sessions/AddCar"
import Sidebar from "../components/Sidebar"
import SignUp from "../pages/sessions/SignUp"
import About from "../pages/sessions/About";
import Home from "../pages/sessions/Home";



function App() {
    return (

        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path="dashboard" element={<DashBoard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="customer" element={<Customer/>}/>
            <Route path="addcar" element={<AddCar/>}/>
            <Route path="addVehicle" element={<About/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="sidebar" element={<Sidebar/>}/>
            <Route path="signup" element={<SignUp/>}/>

        </Routes>
    );
}

export default App;