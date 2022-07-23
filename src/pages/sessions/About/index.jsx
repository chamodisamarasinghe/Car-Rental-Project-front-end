import React from "react";
import "../About/style.css";

import {Typography} from "@mui/material";
import {withStyles} from '@mui/styles';
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const car = new URL("../../../assets/car.jpg",import.meta.url)
function About() {

    return<>
        <div>
            <Link to="/" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'white' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
            <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'white' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
            <Link to="item" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'white' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Item' wrapped={false} /></Link>
        </div>



        <section className="main-container">
            <div className="car" style={{height:100}}>
                <img src={car}/>
            </div>

            <div>

            </div>
        </section>
        </>
}

export default About