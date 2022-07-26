import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from '../../../components/common/Button';
import CustomerService from "../../../services/CustomerService";
import GDSESnackBar from "../../../components/common/SnackBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import AdminDashNav from "../AdminDashBoard/adminDashNav";

class ViewRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                nic: '',
                driverName: '',
                vehicleNo: '',
                noOfVehicles: '',
                payment: '',
                pickUpDate:''

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    deleteCustomer = async (nic) => {
        let params = {
            nic: nic
        }
        let res = await CustomerService.deleteCustomer(params);

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

    updateCustomer = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                nic: data.nic,
                driverName: data.driverName,
                vehicleNo: data.vehicleNo,
                noOfVehicles: data.noOfVehicles,
                payment:data.payment,
                pickUpDate:data.pickUpDate
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                nic: '',
                driverName: '',
                vehicleNo: '',
                noOfVehicles: '',
                payment:'',
                pickUpDate:''
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
        let res = await CustomerService.fetchCustomer();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    submitCustomer = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await CustomerService.postCustomer(formData);

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
            let res = await CustomerService.putCustomer(formData);
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
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} >
                    <Grid>
                        <AdminDashNav/>
                    </Grid>




                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h3" style={{marginLeft:520, marginTop:10, color:"#00008B", fontWeight:"bold", fontSize:40}}>View Rent Request</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer NIC</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Regitration No"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.nic}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.nic = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Brand"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.driverName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverName = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Vehicle No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Type"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.vehicleNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehicleNo = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">No of Vehicles</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="No of Passengers"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.noOfVehicles}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.noOfVehicles = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Payment</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Transmission type"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.payment}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.payment = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Pick up date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Fuel Type"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.pickUpDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUpDate = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>







                        <Grid container style={{ marginTop: '10px' }} direction="row" justifyContent="flex-end" alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor} variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid contaner style={{ marginTop: '15px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Customer NIC</TableCell>
                                    <TableCell align="left">Driver Name</TableCell>
                                    <TableCell align="left">Vehicle No</TableCell>
                                    <TableCell align="left">No Of Vehicles</TableCell>
                                    <TableCell align="left">Payment</TableCell>
                                    <TableCell align="left">Pick up date</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.nic}</TableCell>
                                            <TableCell align="left">{row.driverName}</TableCell>
                                            <TableCell align="left">{row.vehicleNo}</TableCell>
                                            <TableCell align="left">{row.noOfVehicles}</TableCell>
                                            <TableCell align="left">{row.payment}</TableCell>
                                            <TableCell align="left">{row.pickUpDate}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCustomer(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCustomer(row.nic)
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
            // </Fragment>
        );
    }
}

export default ViewRequest;