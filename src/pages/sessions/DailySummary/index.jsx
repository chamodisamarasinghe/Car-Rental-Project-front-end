import React from 'react'
import {Grid} from "@mui/material";
import RubberBtn from "../../../components/common/RubberBandBtn";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Reg from "../../../assets/reg.jpg"
import Book from "../../../assets/book.jpg"
import Driver from "../../../assets/d.jpg"
import Maintain from "../../../assets/main.jpg"
import AdminDashNav from "../AdminDashBoard/adminDashNav";

const DailySummary = ({}) => {


    return (
        <div>
            <Grid >
                <AdminDashNav/>

            </Grid>



            <Grid item lg={12} xs={12} sm={12} md={12}>
                <Typography variant="h3" style={{marginLeft:590, marginTop:30, color:"#00008B", fontWeight:"bold", fontSize:60,fontFamily: "Times New Roman"}}>Summary</Typography>
            </Grid>
            <Card sx={{ maxWidth: 345,ml:25,mt:10 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Reg}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Registered users
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            25
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:75,mt:-29 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Book}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bookings for the day
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            10
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Active Bookings
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            5
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:125,mt:-37 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Driver}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Available Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            40
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Occupied Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            15
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:75,mt:5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Maintain}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Available Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            40
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Occupied Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            15
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    )

}

export default DailySummary