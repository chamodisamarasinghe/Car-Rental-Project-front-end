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





                <div className={classes.title__container}>
                    <Typography style={{color:"#000000", fontWeight:"bold", left:90, position:"absolute"}} variant="h4">
                        Signup
                    </Typography>
                </div>

                <Grid container spacing={0.5}>
                    <Grid item lg={12} md={12} sm={12} xm={12} >
                        <TextField id="outlined-basic" placeHolder="Name" label="First Name" variant="outlined" size="small"
                                   style={{width: '30%', top:150, left:500}} />
                    </Grid>


                        <Grid item lg={12} md={12} sm={12} xm={12} >
                            <TextField id="outlined-basic" placeHolder="Name" label="Last Name" variant="outlined" size="small"
                                       style={{width: '30%', top:180, left:500}} />
                        </Grid>

                    <Grid item lg={12} md={12} sm={12} xm={12}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Gendr" />}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '30%', top:290 , position:"absolute", left:500}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} >
                        <TextField id="outlined-basic" placeHolder="NIC" label="Email" variant="outlined" size="small"
                                   style={{width: '30%', top:260, left:500}}/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12}>
                        <TextField id="outlined-basic" placeHolder="email" label="Password" variant="outlined" size="small"
                                   style={{width: '30%', top:280, left:500}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12}>
                        <TextField id="outlined-basic" placeHolder="email" label="Confirm Password" variant="outlined" size="small"
                                   style={{width: '30%', top:310, left:500}}
                        />
                    </Grid>


                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex', position:"absolute", top:570, left:420, width:300,color:"success"}} justifyContent="flex-end" >
                        <GDSEButton size="large" variant="contained" label="Sign Up"/>





                    </Grid>
                </Grid>










            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Customer)