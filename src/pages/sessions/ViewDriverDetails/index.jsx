import React, { Component, Fragment } from "react";

import Divider from '@mui/material/Divider';
import DriverDashNav from "./driverDashNav";
import {Typography} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

class ViewSchedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <DriverDashNav/>

                </div>




                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3" style={{marginLeft:590, marginTop:30, color:"#00008B", fontWeight:"bold", fontSize:60,fontFamily: "Times New Roman"}}>Driver Schedule</Typography>
                </Grid>




                <Grid contaner style={{ marginTop: '15px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Driver Id</TableCell>
                                    <TableCell align="left">Driver Name</TableCell>
                                    <TableCell align="left">Driver Address</TableCell>
                                    <TableCell align="left">Contact No</TableCell>
                                    <TableCell align="left">NIC</TableCell>
                                    <TableCell align="left">License No</TableCell>
                                    <TableCell align="left">Vehicle No</TableCell>
                                    <TableCell align="left">Working Date</TableCell>
                                    <TableCell align="left">Working Time</TableCell>
                                    <TableCell align="left">Customer Id</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.driverId}</TableCell>
                                            <TableCell align="left">{row.driverName}</TableCell>
                                            <TableCell align="left">{row.driverAddress}</TableCell>
                                            <TableCell align="left">{row.contactNo}</TableCell>
                                            <TableCell align="left">{row.nic}</TableCell>
                                            <TableCell align="left">{row.licenseNo}</TableCell>
                                            <TableCell align="left">{row.vehicleNo}</TableCell>
                                            <TableCell align="left">{row.workingDate}</TableCell>
                                            <TableCell align="left">{row.workingTime}</TableCell>
                                            <TableCell align="left">{row.customerId}</TableCell>
                                            <TableCell align="left">

                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Fragment>
        )
    }
}

export default ViewSchedule