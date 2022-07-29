import React, { Component, Fragment } from "react";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import Grid from "@material-ui/core/Grid";
import DriverDashNav from "../ViewDriverDetails/driverDashNav";
import HomeDashNav from "../Home/homeDashNav";

const about = new URL("../../../assets/about.jpg",import.meta.url)
const car12 = new URL("../../../assets/car12.png",import.meta.url)
const clock = new URL("../../../assets/clock.png",import.meta.url)
const car9 = new URL("../../../assets/car9.png",import.meta.url)
const clo = new URL("../../../assets/clo.png",import.meta.url)
class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <HomeDashNav/>

                </Grid>


                <Grid>
                    <img src={car9} style={{ position:"absolute",top:8, left:200,height:30,width:30}}/>
                    <img src={clo} style={{ position:"absolute",top:8, left:670,height:30,width:30}}/>
                    <h1 style={{fontSize:20 ,color:"white", left:300, position:"absolute", top:-3}}>Sunday to Friday(9.00am-10.00pm)</h1>
                    {/*<img src={car12} style={{position:"absolute", top:2, left:2}}/>*/}
                    {/*<h1 style={{color:"#00008B", left:60, position:"absolute", top:-20}}>Royal Car Service</h1>*/}
                    {/*<img src={clock} style={{ position:"absolute",top:8, left:460,height:30,width:30}}/>*/}
                    {/*<h1 style={{fontSize:20 ,color:"#00008B", left:500, position:"absolute", top:-3}}>Sunday to Friday(9.00am-10.00pm)</h1>*/}
                </Grid>




                <Grid>
                    <img src={about} style={{position:"absolute", top:100, left:2, height:600,width:1000}}/>
                    <h1 style={{top:100, left:1100, position:"absolute", color:"black",fontFamily: "Times New Roman",fontSize:40}}>About Us</h1>
                    <p style={{position:"absolute",top:200,left:960}}>Yes – one-way car hire in the USA is possible. If you want
                        to drive coast to coast from Chicago to LA, or between any other
                        cities, just choose a different drop-off location. Be aware that
                        many car hire companies charge a One Way Fee, also known as a drop
                        charge, for this type of rental.
                        When you search for a one-way rental in the USA on Rentalcars.com,
                        we tell you (before you book) if a car hire company would charge a
                        One Way Fee. And because we deal with so many car hire companies in the USA,
                        you can easily compare them to find the ones with the smallest fees, or even no One Way Fee at all.</p>
                </Grid>


                <Grid>
                    {/*<h1 syle={{position:"absolute",left:600,fontWeight:"bold",fontSize:50}}>About Us</h1>*/}
                </Grid>
            </Fragment>
        )
    }
}

export default AboutUs