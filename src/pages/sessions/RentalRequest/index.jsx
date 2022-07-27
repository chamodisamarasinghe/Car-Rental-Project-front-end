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

class RentalRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                rentId: '',
                pickUpDate: '',
                pickUpTime: '',
                returnDate: '',
                returnTime:'',
                slip:'',
                carType:'',
                wantDriver:'',
                cusId:'',
                regNo:''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }






    updateCustomer = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                rentId: data.rentId,
                pickUpDate:data.pickUpDate,
                pickUpTime:data.pickUpTime,
                returnDate:data.returnDate,
                returnTime:data.returnTime,
                slip:data.slip,
                carType:data.carType,
                wantDriver:data.wantDriver,
                cusId:data.cusId,
                regNo:data.regNo
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                id: '',
                name: '',
                address: '',
                salary: ''
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
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h3" style={{marginLeft:520, marginTop:10, color:"#00008B", fontWeight:"bold", fontSize:40}}>Rent a Car</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Rent Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Rent Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.rentId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.rentId = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Pickup Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Pickup Date"
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


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Pickup Time</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Pickup Time"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.pickUpTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUpTime = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>



                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Return Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Return Date"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.returnDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.returnDate = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Return Time</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Return Time"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.returnTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.returnTime = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Slip</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Slip"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.slip}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.slip = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>




                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Car Type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Type"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.carType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.carType = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver want/ not</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Free Km for price"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.wantDriver}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.wantDriver = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.cusId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.cusId = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Registration No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Registration No"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.regNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.regNo = e.target.value
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
                                    <TableCell align="left">Rent Id</TableCell>
                                    <TableCell align="left">Pickup Time</TableCell>
                                    <TableCell align="left">Return Date</TableCell>
                                    <TableCell align="left">Return Time</TableCell>
                                    <TableCell align="left">Car Type</TableCell>
                                    <TableCell align="left">Driver want/ not</TableCell>
                                    <TableCell align="left">Customer Id</TableCell>
                                    <TableCell align="left">Registration No</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.rentId}</TableCell>
                                            <TableCell align="left">{row.pickUpDate}</TableCell>
                                            <TableCell align="left">{row.pickUpTime}</TableCell>
                                            <TableCell align="left">{row.returnDate}</TableCell>
                                            <TableCell align="left">{row.returnTime}</TableCell>
                                            <TableCell align="left">{row.carType}</TableCell>
                                            <TableCell align="left">{row.wantDriver}</TableCell>
                                            <TableCell align="left">{row.cusId}</TableCell>
                                            <TableCell align="left">{row.regNo}</TableCell>
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
                                                            this.deleteCustomer(row.rentId)
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

export default RentalRequest;