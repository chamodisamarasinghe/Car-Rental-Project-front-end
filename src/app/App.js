import React from "react";
import Login from "../pages/sessions/Login";
import {Routes, Route} from "react-router-dom";
import DashBoard from "../pages/sessions/DashBoard";
import Customer from "../pages/sessions/Customer"

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
import AdminDashBoard from "../pages/sessions/AdminDashBoard";
import CustomerLogin from "../pages/sessions/CustomerLogin";
import DriverLogin from "../pages/sessions/DriverLogin";
import AdminLogin from "../pages/sessions/AdminLogin";
import CustomerDashBoard from "../pages/sessions/CustomerDashBoard";
import RentalRequest from "../pages/sessions/RentalRequest";
import Income from "../pages/sessions/Income";
import ViewRequest from "../pages/sessions/ViewRequest";

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
            <Route path="about" element={<AboutCars/>}/>
            <Route path="sidebar" element={<Sidebar/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="details" element={<DriverDetails/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="test" element={<Test/>}/>
            <Route exact path="admindashboard" element={<AdminDashBoard/>}/>
            <Route path="customerdashboard" element={<CustomerDashBoard/>}/>
            <Route path="customerlogin" element={<CustomerLogin/>}/>
            <Route path="driverlogin" element={<DriverLogin/>}/>
            <Route path="adminlogin" element={<AdminLogin/>}/>
            <Route path="rentalrequest" element={<RentalRequest/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="viewRequest" element={<ViewRequest/>}/>
        </Routes>
    );
}

export default App;