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
import DriverDashNav from "../ViewDriverDetails/driverDashNav";
import {LocalizationProvider, StaticDatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@material-ui/core/TextField";


const driver = new URL("../../../assets/driver.png",import.meta.url)
const car9 = new URL("../../../assets/car9.png",import.meta.url)
const cus = new URL("../../../assets/cus.png",import.meta.url)
class DashDriver extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <div>
                        <DriverDashNav/>

                    </div>
                </Grid>


                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3" style={{marginLeft:590, marginTop:30, color:"#00008B", fontWeight:"bold", fontSize:60,fontFamily: "Times New Roman"}}>Driver</Typography>
                </Grid>


                <Grid>
                    <img src={car9} style={{ position:"absolute",top:8, left:200,height:30,width:30}}/>
                    <img src={driver} style={{position:"absolute", top:70, left:800,width:100,height:100}}/>
                </Grid>




                <LocalizationProvider style={{position:"absolute",top:400}} dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="year"
                        value={this.value}
                        onChange={(newValue) => {
                            function setValue(newValue) {

                            }

                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>




            </Fragment>
        )
    }
}

export default DashDriver