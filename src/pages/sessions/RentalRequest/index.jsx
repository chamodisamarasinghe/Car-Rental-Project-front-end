import React, { Component, Fragment } from "react";
import AdminDashNav from "../AdminDashBoard/adminDashNav";
import {Grid} from "@mui/material";



class RentalRequest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <AdminDashNav/>

                </Grid>
            </Fragment>
        )
    }
}

export default RentalRequest