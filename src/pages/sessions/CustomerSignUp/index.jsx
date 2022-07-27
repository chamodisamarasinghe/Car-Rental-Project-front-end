import {Link, Typography} from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../components/common/Button";
import GDSESnackBar from "../../../components/common/SnackBar";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";

const sign = new URL("../../../assets/sign.png",import.meta.url)
class CustomerSignUp extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { classes } = this.props;
        return (
            <Typography>

                <Grid>
                    <img src={sign} style={{position:"absolute", top:100, left:710,width:90,height:90}}/>
                    <Typography variant="h4" style={{ fontFamily: "Times New Roman", fontWeight:"bold",position:"absolute",top:22,left:700,color:"#00008B"}}>Sign up</Typography>

                </Grid>






                <Grid>
                    <TextField style={{position:"absolute",top:200,left:300,width:400,height:5}} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField style={{position:"absolute",top:200,left:800,width:400,height:10}}
                        id="outlined-password-input"
                        label="New Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField style={{position:"absolute",top:270,left:300,width:400,height:5}} id="outlined-basic" label="NIC Number" variant="outlined" />
                    <TextField style={{position:"absolute",top:270,left:800,width:400,height:10}} id="outlined-basic" label="NIC Image" variant="outlined" />
                    <TextField style={{position:"absolute",top:340,left:300,width:400,height:5}} id="outlined-basic" label="Driving License No" variant="outlined" />
                    <TextField style={{position:"absolute",top:340,left:800,width:400,height:10}} id="outlined-basic" label="Driving license image" variant="outlined" />
                    <TextField style={{position:"absolute",top:410,left:300,width:400,height:5}} id="outlined-basic" label="Address" variant="outlined" />
                    <TextField style={{position:"absolute",top:410,left:800,width:400,height:10}} id="outlined-basic" label="Contact No" variant="outlined" />
                </Grid>



                <Grid>
                    <Link href="rentalrequest" underline="none">
                        <Button style={{position:"absolute",top:550,left:700}}  color='primary' variant="contained">Sign Up</Button>
                    </Link>
                </Grid>
            </Typography>


        )
    }
}
export default withStyles(styleSheet)(CustomerSignUp)