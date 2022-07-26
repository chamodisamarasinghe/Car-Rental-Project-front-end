import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import {Typography} from "@mui/material";
import Button from "@material-ui/core/Button";
import GDSEButton from "../../../components/common/Button";
import {PhotoCamera} from "@mui/icons-material";
import IconButton from "@material-ui/core/IconButton";
import HomeDashNav from "../Home/homeDashNav";
import CustomerDashNav from "./customerDashNav";


const cus = new URL("../../../assets/cus.png",import.meta.url)
class CustomerDashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <div>
                        <CustomerDashNav/>
                    {/*    <Link to="/" style={{position:'absolute', left:900, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>*/}
                    {/*    <Link to="aboutus" style={{position:'absolute', left:1000, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='About Us' wrapped={false} /></Link>*/}
                    {/*    <Link to="test" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Cars' wrapped={false} /></Link>*/}
                    {/*    <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>*/}
                    {/*    <Link to="driver" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Drivers' wrapped={false} /></Link>*/}
                    </div>
                </Grid>


                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3" style={{marginLeft:590, marginTop:30, color:"#00008B", fontWeight:"bold", fontSize:60,fontFamily: "Times New Roman"}}>Customer</Typography>
                </Grid>


                <Grid>
                    <img src={cus} style={{position:"absolute", top:200, left:670,width:100,height:100}}/>
                </Grid>




                {/*<Button variant="contained" color="success" style={{width:400,top:200,height:70,left:150}}>*/}
                {/*   View About Cars*/}
                {/*</Button>*/}

                {/*<Link to= "/" underline="none">*/}
                {/*<Button variant="contained" color="success" style={{width:400,top:200,height:70,left:500}}>*/}
                {/*    Register*/}
                {/*</Button>*/}
                {/*</Link>*/}

                {/*<Button variant="contained" color="success" style={{width:400,top:400,height:70,left:100}}>*/}
                {/*    Calculate Income*/}
                {/*</Button>*/}

                {/*<Button variant="contained" color="success" style={{width:400,top:300,height:70,left:150}}>*/}
                {/*    Daily Summary*/}
                {/*</Button>*/}




            </Fragment>
        )
    }
}

export default CustomerDashBoard