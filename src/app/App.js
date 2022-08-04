import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import Customer from "../pages/sessions/ManageCustomer"

import AddCar from "../pages/sessions/AddCar"
import Sidebar from "../components/Sidebar"
import SignUp from "../pages/sessions/SignUp"
import DriverDetails from "../pages/sessions/ViewDriverDetails"
import Home from "../pages/sessions/Home";
import Driver from "../pages/sessions/Driver";
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
import CustomerSignUp from "../pages/sessions/CustomerSignUp";
import ViewDriverDetails from "../pages/sessions/ViewDriverDetails";

import DashDriver from "../pages/sessions/DashDriver";
import ViewSchedule from "../pages/sessions/ViewDriverDetails";
import ManageCustomer from "../pages/sessions/ManageCustomer";



function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            {/*<Route path="customer" element={<Customer/>}/>*/}
            <Route path="driver" element={<Driver/>}/>
            <Route path="addcar" element={<AddCar/>}/>
            <Route path="sidebar" element={<Sidebar/>}/>
            <Route path="customersignup" element={<CustomerSignUp/>}/>
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
            <Route path="dashdriver" element={<DashDriver/>}/>
            <Route path="viewSchedule" element={<ViewDriverDetails/>}/>
            <Route path="customerManage" element={<ManageCustomer/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;