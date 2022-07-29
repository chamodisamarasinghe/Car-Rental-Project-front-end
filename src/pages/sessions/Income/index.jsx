import React, { Component, Fragment } from "react";
import AdminDashNav from "../AdminDashBoard/adminDashNav";
import {Grid} from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
class Income extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <AdminDashNav/>

                </Grid>





                <Grid>
                <Card sx={{ minWidth: 100 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 40,color:"#0000FF" }} color="text.secondary" gutterBottom>
                            Weekly Income
                        </Typography>
                        <Typography variant="h5" component="div">
                            Rupees:
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            50,000
                        </Typography>
                        {/*<Typography variant="body2">*/}
                        {/*    well meaning and kindly.*/}
                        {/*    <br />*/}
                        {/*    {'"a benevolent smile"'}*/}
                        {/*</Typography>*/}
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                </Grid>




                <Grid>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 40,color:"#0000FF" }} color="text.secondary" gutterBottom>
                                Monthly Income
                            </Typography>
                            <Typography variant="h5" component="div">
                                Rupees:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                70,000
                            </Typography>
                            {/*<Typography variant="body2">*/}
                            {/*    well meaning and kindly.*/}
                            {/*    <br />*/}
                            {/*    {'"a benevolent smile"'}*/}
                            {/*</Typography>*/}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>



                <Grid>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 40,color:"#0000FF" }} color="text.secondary" gutterBottom>
                                Yearly Income
                            </Typography>
                            <Typography variant="h5" component="div">
                               Rupees:
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                100,000
                            </Typography>
                            {/*<Typography variant="body2">*/}
                            {/*    well meaning and kindly.*/}
                            {/*    <br />*/}
                            {/*    {'"a benevolent smile"'}*/}
                            {/*</Typography>*/}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Fragment>
        )
    }
}

export default Income