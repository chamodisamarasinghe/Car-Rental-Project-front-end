import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/common/Button"
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';








class Customer extends Component {





    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'Male' },
                { label: 'Female' }

            ]
        }

    }

    render() {




        const { classes } = this.props;
        return (
            <Fragment>



                <div>
                    <Link to="/" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
                    <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
                    <Link to="item" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Item' wrapped={false} /></Link>
                </div>

                <div className={classes.title__container}>
                    <Typography variant="h4">
                        Customer Manage
                    </Typography>
                </div>

                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Customer Id" label="Customer Id" variant="outlined" size="small"
                                   style={{width: '90%', top:150}} />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Name" label="Name" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Address" label="Address" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Contact No" label="Contact No" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Email" label="Email" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="NIC" label="NIC" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}
                        />
                    </Grid>











                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex', position:"absolute", top:270, left:1000, width:300,color:"success"}} justifyContent="flex-end" >
                        <GDSEButton size="large" variant="contained" label="save"/>

                        <Button variant="contained" color="success" style={{left:50}}>
                            Update
                        </Button>
                        <Button variant="contained" color="error" style={{left:100}}>
                            Cancel
                        </Button>



                    </Grid>
                </Grid>










            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Customer)