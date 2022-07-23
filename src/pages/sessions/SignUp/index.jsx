import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../components/common/Button";
import GDSESnackBar from "../../../components/common/SnackBar";

const sign = new URL("../../../assets/sign.png",import.meta.url)
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pw: 'admin',
            formData: {
                user_name: '',
                password: ''
            },
            //for snackbar props
            open: false,
            message: '',
            severity: ''
        }
    }

    checkValidity() {
        console.log("Login button clicked!")

        console.log(this.state.formData)

        let formData = this.state.formData

        if (formData.user_name === this.state.userName && formData.password === this.state.pw) {
            console.log('credential matched!')
            this.setState({
                open: true,
                message: 'User credential matching sucess!',
                severity: 'success'
            })
        } else {
            console.log('credential didn\'t matche!')
            this.setState({
                open: true,
                message: 'User credential not matching!',
                severity: 'error'
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <img src={sign} style={{position:"absolute", top:100, left:710,width:90,height:90}}/>
                        <Typography variant="h4" style={{ fontFamily: "Times New Roman", fontWeight:"bold",position:"absolute",top:22,left:700,color:"#00008B"}}>Sign up</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="First name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Last name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                        />


                        <TextField
                            id="outlined-basic"
                            label="User name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                        />


                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                            }}
                        />


                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                            }}
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <GDSEButton style={{left:690, top:670, position:"absolute"}}
                            variant="contained"
                            label="Sign up"
                            onClick={() => {
                                this.checkValidity()
                            }}
                        />
                    </div>
                </div>
                <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </div>
        )
    }
}
export default withStyles(styleSheet)(SignUp)