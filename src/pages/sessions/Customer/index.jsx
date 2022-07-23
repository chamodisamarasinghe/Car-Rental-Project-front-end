import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from "../../../components/common/Button";
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: '',
                name: '',
                address: '',
                contactNo: '',
                email: '',
                nic: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    deleteCustomer = async (id) => {
        let params = {
            id: id
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
                id: data.id,
                name: data.name,
                address: data.address,
                contactNo: data.contactNo,
                email: data.email,
                nic: data.nic
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                id: '',
                name: '',
                address: '',
                contactNo: '',
                email: '',
                nic: '',

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
            // <Grid style={{backgroundImage: "url(" + Background + ")"}}>
            <>

                <ValidatorForm  ref="form" className="pt-2" onSubmit={this.submitCustomer} >
                    <Grid >
                    <div style={{color:"red"}}>
                        <Link to="/" style={{position:'absolute', left:1000, top:20, textDecoration:"none" ,color:'black', fontWeight:"bold" }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
                        <Link to="about" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black',top:20 }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='About us' wrapped={false} /></Link>
                        <Link to="customer" style={{position:'absolute', left:1200, top:20, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
                        <Link to="driver" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black',top:20 }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Drivers' wrapped={false} /></Link>
                    </div>
                 </Grid>

                    <Grid>
                        <Box component="span" sx={{ p: 2, border: '5px dashed black', width:70, height:60, top:450, left:100, position:"absolute"}}>
                            <Button>NIC Front image</Button>
                        </Box>
                    </Grid>

                    <Grid>
                        <Box component="span" sx={{ p: 2, border: '5px dashed black', width:70, height:60, top:450, left:300, position:"absolute"}}>
                            <Button>NIC Back image</Button>
                        </Box>
                    </Grid>

                    <Grid>
                        <Box component="span" sx={{ p: 2, border: '5px dashed black', width:70, height:60, top:450, left:500, position:"absolute"}}>
                            <Button>License image</Button>
                        </Box>
                    </Grid>


                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h3" style={{marginLeft:520, marginTop:10, color:"#00008B", fontWeight:"bold", fontSize:40}}>Customer Manage</Typography>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <Typography style={{top:145, left:65, position:"absolute"}} variant="subtitle1"  >Customer Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%', left:50 ,top:100}}
                                value={this.state.formData.id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.id = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <Typography style={{top:145, left:820, position:"absolute"}} variant="subtitle1" >Customer Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Name"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%', left:50 ,top:100}}
                                value={this.state.formData.name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <Typography style={{top:230, left:65, position:"absolute"}} variant="subtitle1" >Customer Address</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Address"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%', left:50 ,top:120}}
                                value={this.state.formData.address}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.address = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <Typography style={{top:230, left:820, position:"absolute"}} variant="subtitle1" >Contact No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Contact No"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%', left:50 ,top:120}}
                                value={this.state.formData.contactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.contactNo = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid  item xs={12} sm={12} md={6} lg={6} >
                            <Typography style={{top:320, left:65, position:"absolute"}} variant="subtitle1" >Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%', left:50 ,top:150}}
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <Typography style={{top:320, left:820, position:"absolute"}} variant="subtitle1" >NIC</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="NIC"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%', left:50 ,top:150}}
                                value={this.state.formData.nic}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.nic = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid container style={{ marginTop: '200px', left:200 }} direction="row" justifyContent="flex-end" alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="large" color={this.state.btnColor} variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid contaner style={{ marginTop: '100px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Customer Id</TableCell>
                                    <TableCell align="left">Customer Name</TableCell>
                                    <TableCell align="left">Customer Address</TableCell>
                                    <TableCell align="left">Contact No</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">NIC</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.contactNo}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.nic}</TableCell>
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
                                                            this.deleteCustomer(row.id)
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

export default Customer;
