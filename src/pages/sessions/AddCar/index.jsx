import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from '../../../components/common/Button';
import CarService from "../../../services/CarService";
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

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                idCar:'',
                regNo:'',
                brand:'',
                type:'',
                noOfPassengers:'',
                transmissionType:'',
                fuelType:'',
                color:'',
                frontViewImage:'',
                backViewImage:'',
                sideViewImage:'',
                internalViewImage:'',
                dailyRate:'',
                monthlyRate:'',
                freeKmForPrice:'',
                freeKmForDuration:'',
                lossDamageWaiver:'',
                priceForExtraKm:'',
                completeKm:'',
                isAvailable:''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    deleteCar = async (idCar) => {
        let params = {
            idCar: idCar
        }
        let res = await CarService.deleteCar(params);

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

    updateCar = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                idCar:data.idCar,
                regNo:data.regNo,
                brand:data.brand,
                type:data.type,
                noOfPassengers:data.noOfPassengers,
                transmissionType:data.transmissionType,
                fuelType:data.fuelType,
                color:data.color,
                frontViewImage:data.frontViewImage,
                backViewImage:data.backViewImage,
                sideViewImage:data.sideViewImage,
                internalViewImage:data.internalViewImage,
                dailyRate:data.dailyRate,
                monthlyRate:data.monthlyRate,
                freeKmForPrice:data.freeKmForPrice,
                freeKmForDuration:data.freeKmForDuration,
                lossDamageWaiver:data.lossDamageWaiver,
                priceForExtraKm:data.priceForExtraKm,
                completeKm:data.completeKm,
                isAvailable:data.isAvailable
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                idCar:'',
                regNo:'',
                brand:'',
                type:'',
                noOfPassengers:'',
                transmissionType:'',
                fuelType:'',
                color:'',
                frontViewImage:'',
                backViewImage:'',
                sideViewImage:'',
                internalViewImage:'',
                dailyRate:'',
                monthlyRate:'',
                freeKmForPrice:'',
                freeKmForDuration:'',
                lossDamageWaiver:'',
                priceForExtraKm:'',
                completeKm:'',
                isAvailable:''
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
        let res = await CarService.fetchCar();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    submitCar = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await CarService.postCar(formData);

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
            let res = await CarService.putCar(formData);
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

            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCar} >

                    <Grid>
                        <AdminDashNav/>
                    </Grid>



                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h3" style={{marginLeft:520, marginTop:10, color:"#00008B", fontWeight:"bold", fontSize:40}}>Add a Car</Typography>



                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Car Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Id"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.idCar}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.idCar = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />






                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Registration No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Registration No"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.regNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.regNo = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />


                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Brand</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Brand"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.brand}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.brand = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Type"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.type}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.type = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">No of Passengers</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="No of Passengers"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.noOfPassengers}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.noOfPassengers = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Transmission type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Transmission type"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.transmissionType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.transmissionType = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Fuel Type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Fuel Type"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.fuelType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.fuelType = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Color</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Color"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.color}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.color = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Front View Image</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Color"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.frontViewImage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.frontViewImage = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Back View Image</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Back View Image"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.backViewImage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.backViewImage = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Side View Image</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Side View Image"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.sideViewImage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.sideViewImage = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Internal View Image</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Internal View Image"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.internalViewImage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.internalViewImage = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>






                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Daily Rate</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Daily Rate"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.dailyRate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dailyRate = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Monthly Rate</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Monthly Rate"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.monthlyRate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.monthlyRate = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Free Km for price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Free Km for price"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.freeKmForPrice}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.freeKmForPrice = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Free Km for duration</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Free Km for duration"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.freeKmForDuration}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.freeKmForDuration = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>



                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Loss damage waiver</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Loss damage waiver"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.lossDamageWaiver}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.lossDamageWaiver = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Price For ExtraKm</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Complete Km"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.priceForExtraKm}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.priceForExtraKm = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>




                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Complete Km</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Complete Km"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.completeKm}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.completeKm = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="subtitle1">Is Available</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Complete Km"
                                variant="outlined"
                                size="small"
                                // style={{ width: '100%' }}
                                value={this.state.formData.isAvailable}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.isAvailable = e.target.value
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
                        <Table sx={{ minWidth: 650 }} aria-label="car table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Car Id</TableCell>
                                    <TableCell align="left">Regitration No</TableCell>
                                    <TableCell align="left">Brand</TableCell>
                                    <TableCell align="left">Type</TableCell>
                                    <TableCell align="left">No Of Passengers</TableCell>
                                    <TableCell align="left">Transmission Type</TableCell>
                                    <TableCell align="left">Fuel Type</TableCell>
                                    <TableCell align="left">Color</TableCell>
                                    <TableCell align="left">Front View Image</TableCell>
                                    <TableCell align="left">Back View Image</TableCell>
                                    <TableCell align="left">Side View Image</TableCell>
                                    <TableCell align="left">Internal View Image</TableCell>
                                    <TableCell align="left">Daily Rate</TableCell>
                                    <TableCell align="left">Monthly Rate</TableCell>
                                    <TableCell align="left">Free Km For Price</TableCell>
                                    <TableCell align="left">Free Km For Duration</TableCell>
                                    <TableCell align="left">Loss Damage Waiver</TableCell>
                                    <TableCell align="left">Price For ExtraKm</TableCell>
                                    <TableCell align="left">Complete Km</TableCell>
                                    <TableCell align="left">Is Available</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.regNo}</TableCell>
                                            <TableCell align="left">{row.brand}</TableCell>
                                            <TableCell align="left">{row.noOfPassengers}</TableCell>
                                            <TableCell align="left">{row.transmissionType}</TableCell>
                                            <TableCell align="left">{row.fuelType}</TableCell>
                                            <TableCell align="left">{row.color}</TableCell>
                                            <TableCell align="left">{row.frontViewImage}</TableCell>
                                            <TableCell align="left">{row.backViewImage}</TableCell>
                                            <TableCell align="left">{row.sideViewImage}</TableCell>
                                            <TableCell align="left">{row.internalViewImage}</TableCell>
                                            <TableCell align="left">{row.dailyRate}</TableCell>
                                            <TableCell align="left">{row.monthlyRate}</TableCell>
                                            <TableCell align="left">{row.freeKmForPrice}</TableCell>
                                            <TableCell align="left">{row.freeKmForDuration}</TableCell>
                                            <TableCell align="left">{row.lossDamageWaiver}</TableCell>
                                            <TableCell align="left">{row.priceForExtraKm}</TableCell>
                                            <TableCell align="left">{row.completeKm}</TableCell>
                                            <TableCell align="left">{row.isAvailable}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCar(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCar(row.id)
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

export default AddCar;