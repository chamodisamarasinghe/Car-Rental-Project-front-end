import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from "../../../components/common/Button";
import DriverService from "../../../services/DriverService";
import GDSESnackBar from "../../../components/common/SnackBar";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
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
import AdminDashNav from "../AdminDashBoard/adminDashNav";


class Driver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                driverId:'',
                driverName:'',
                driverAddress:'',
                contactNo:'',
                nic:'',
                licenseNo:'',
                vehicleNo:'',
                workingDate:'',
                workingTime:'',
                customerId: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    deleteDriver = async (driverId) => {
        let params = {
            driverId: driverId
        }
        let res = await DriverService.deleteDriver(params);

        if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    updateDriver = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                driverId: data.driverId,
                driverName:data.driverName,
                driverAddress:data.driverAddress,
                contactNo:data.contactNo,
                nic:data.nic,
                licenseNo:data.licenseNo,
                vehicleNo:data.vehicleNo,
                workingDate:data.workingDate,
                workingTime:data.workingTime,
                customerId:data.customerId
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                driverId:'',
                driverName:'',
                driverAddress:'',
                contactNo:'',
                nic:'',
                licenseNo:'',
                vehicleNo:'',
                workingDate:'',
                workingTime:'',
                customerId: ''

            }
        });
    };

    // ------- React Map function example -------
    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    loadData = async () => {
        let res = await DriverService.fetchDriver();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    submitDriver = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await DriverService.postDriver(formData);

            console.log(res)    //print the promise

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await DriverService.putDriver(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (

            // <Fragment>
            // <Grid style={{backgroundImage: "url(" + Background + ")"}}>
            <>

                <ValidatorForm  ref="form" className="pt-2" onSubmit={this.submitDriver} >
                    <Grid >
                        <AdminDashNav/>

                    </Grid>




                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h3" style={{marginLeft:520, marginTop:10, color:"#00008B", fontWeight:"bold", fontSize:40}}>Driver Manage</Typography>
                        </Grid>



                        <Grid item xs={12} sm={12} md={3} lg={6} >
                            <Typography  variant="subtitle1"  >Driver Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverId = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1" >Driver Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverName = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1" >Driver Address</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Address"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverAddress}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverAddress = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>



                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1" >Contact No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Contact No"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.contactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.contactNo = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid  item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1" >NIC</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.nic}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.nic = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1"  >License No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="License No"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.licenseNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.licenseNo = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1"  >Vehicle Num</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Vehicle Num"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.vehicleNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehicleNo = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1"  >Working Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Working Date"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.workingDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.workingDate= e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1"  >Working Time</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Working Time"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.workingTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.workingTime = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography  variant="subtitle1"  >Customer Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.customerId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerId = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>




                        <Grid container style={{ marginTop: '10px', left:200 }} direction="row" justifyContent="flex-end" alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="large" color={this.state.btnColor} variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
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
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateDriver(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteDriver(row.id)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
            // </Grid>
            // </Fragment>
        );
    }
}

export default Driver;
