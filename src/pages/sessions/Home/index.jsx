import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";

const car3 = new URL("../../../assets/car3.jpg",import.meta.url)
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <div>
                        <Link to="/" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
                        <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
                        <Link to="item" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Item' wrapped={false} /></Link>
                    </div>
                </Grid>

                <Grid>
                    <img src={car3} style={{height:600,top:100,width:1400, position:"absolute"}}/>
                    <h1 style={{top:200, position:"absolute"}}>Hello</h1>
                </Grid>


                <Grid>

                </Grid>
            </Fragment>
        )
    }
}

export default Home