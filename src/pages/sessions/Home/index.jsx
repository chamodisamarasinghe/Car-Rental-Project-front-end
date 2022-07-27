import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerAppBar from "./homeDashNav";
import HomeDashNav from "./homeDashNav";


const car4 = new URL("../../../assets/car4.jpg",import.meta.url)
const car12 = new URL("../../../assets/car12.png",import.meta.url)
const clock = new URL("../../../assets/clock.png",import.meta.url)
const driv = new URL("../../../assets/driv.png",import.meta.url)
const cc = new URL("../../../assets/cc.png",import.meta.url)


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <div>
<HomeDashNav/>
                        {/*<Link to="/" style={{position:'absolute', left:900, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>*/}
                        {/*<Link to="aboutus" style={{position:'absolute', left:1000, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='About Us' wrapped={false} /></Link>*/}
                        {/*<Link to="customerlogin" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>*/}
                        {/*<Link to="driverlogin" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Drivers' wrapped={false} /></Link>*/}
                        {/*<Link to="adminlogin" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Admin' wrapped={false} /></Link>*/}

                    </div>
                </Grid>

                <Grid>
                    {/*<img src={car12} style={{position:"absolute", top:2, left:2}}/>*/}
                    {/*<h1 style={{color:"#00008B", left:60, position:"absolute", top:-20}}>Royal Car Service</h1>*/}
                    <img src={clock} style={{ position:"absolute",top:8, left:460,height:30,width:30}}/>
                    <h1 style={{fontSize:20 ,color:"#00008B", left:500, position:"absolute", top:-3}}>Sunday to Friday(9.00am-10.00pm)</h1>
                    <img src={car4} style={{height:670,width:1495, position:"absolute",top:50, opacity:10}}/>
                    <h1 style={{top:60, left:400, position:"absolute", color:"white",fontFamily: "Times New Roman",fontSize:60}}>Looking to Rent a Car</h1>





                </Grid>


                <Grid>
                    <Box component="span" sx={{ p: 2, border: '5px dashed white', position:"absolute", top:300, height:300,width:200, left:50 }}>
                        <Button style={{color:"white", fontSize:30,fontFamily: "Lucida Console"}}>Available Drivers</Button>
                    </Box>
                    <img src={driv} style={{position:"absolute", top:450, left:120,height:70,width:70}}/>



                    <Button variant="contained" color="primary" style={{left:120, position:"absolute", top:560}}>
                        8
                    </Button>
                </Grid>




                <Grid>
                    <Box component="span" sx={{ p: 2, border: '5px dashed white', position:"absolute", top:300, height:300,width:200, left:350 }}>
                        <Button style={{color:"white", fontSize:30,fontFamily: "Lucida Console"}}>Available Cars</Button>
                    </Box>
                    <img src={cc} style={{position:"absolute", top:450, left:450,height:70,width:70}}/>



                    <Button variant="contained" color="primary" style={{left:450, position:"absolute", top:560}}>
                        8
                    </Button>
                </Grid>







                <Grid>

                    <Button variant="contained" color="primary" style={{left:1300, position:"absolute", top:60}}>
                        Sign up
                    </Button>


                </Grid>


                <Grid>
                    <Button variant="contained" color="primary" style={{left:1400, position:"absolute", top:60}}>
                        Log in
                    </Button>
                </Grid>
            </Fragment>
        )
    }
}

export default Home