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
const cll = new URL("../../../assets/cll.png",import.meta.url)
const Face = new URL("../../../assets/Face.png",import.meta.url)
const twi = new URL("../../../assets/twi.png",import.meta.url)
const YouT = new URL("../../../assets/YouT.png",import.meta.url)
const car9 = new URL("../../../assets/car9.png",import.meta.url)
const clo = new URL("../../../assets/clo.png",import.meta.url)
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

                    </div>
                </Grid>

                <Grid>
                    <img src={car9} style={{ position:"absolute",top:8, left:200,height:30,width:30}}/>
                    <img src={clo} style={{ position:"absolute",top:8, left:670,height:30,width:30}}/>
                    <h1 style={{fontSize:20 ,color:"white", left:300, position:"absolute", top:-3}}>Sunday to Friday(9.00am-10.00pm)</h1>
                    <img src={car4} style={{height:670,width:1495, position:"absolute",top:50, opacity:10}}/>
                    <h1 style={{top:200, left:60, position:"absolute", color:"white",fontFamily: "Times New Roman",fontSize:70}}>Looking to Rent a Car</h1>
                    <h2 style={{top:295, left:120, position:"absolute", color:"white",fontFamily: "Times New Roman",fontSize:40}}>Favourite Rental Service</h2>
                    <h2 style={{top:400, left:130, position:"absolute", color:"white",fontFamily: "Times New Roman",fontSize:15}}>The Best Final Car Rental Rates! No Hidden Extra Charges!</h2>
                    <h2 style={{top:430, left:150, position:"absolute", color:"white",fontFamily: "Times New Roman",fontSize:15}}>Trusted by 7 million customers and counting!</h2>

                </Grid>



                <Grid>
                    <img src={cll} style={{ position:"absolute",top:600, left:60}}/>
                    <img src={Face} style={{ position:"absolute",top:600, left:120}}/>
                    <img src={twi} style={{ position:"absolute",top:600, left:180}}/>
                    <img src={YouT} style={{ position:"absolute",top:600, left:240}}/>
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