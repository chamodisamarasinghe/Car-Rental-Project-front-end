import React from "react";
import Login from "../pages/sessions/Login";
import {Routes, Route} from "react-router-dom";
import DashBoard from "../pages/sessions/DashBoard";
import Customer from "../pages/sessions/Customer"
import AddVehicle from "../pages/sessions/AddVehicle"
import AddCar from "../pages/sessions/AddCar"
import Sidebar from "../components/Sidebar"
import SignUp from "../pages/sessions/SignUp"
import DriverDetails from "../pages/sessions/Driver Details"
import Home from "../pages/sessions/Home";
import Card from "../pages/sessions/Card";
import Driver from "../pages/sessions/Driver";
import AboutCars from "../pages/sessions/About Cars";
import Test from "../pages/sessions/Test";
import AboutUs from "../pages/sessions/AboutUs";


function App() {
    return (

        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path="dashboard" element={<DashBoard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="customer" element={<Customer/>}/>
            <Route path="driver" element={<Driver/>}/>
            <Route path="card" element={<Card/>}/>
            <Route path="addcar" element={<AddCar/>}/>
            {/*<Route path="addVehicle" element={<About/>}/>*/}
            <Route path="about" element={<AboutCars/>}/>
            <Route path="sidebar" element={<Sidebar/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="details" element={<DriverDetails/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="test" element={<Test/>}/>
        </Routes>
    );
}

export default App;