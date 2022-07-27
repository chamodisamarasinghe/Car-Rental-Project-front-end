import React, { Component, Fragment } from "react";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ValidatorForm} from "react-material-ui-form-validator";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import RentDashNav from "../CustomerDashBoard/rentNav";



// const Alto = new URL("../../../assets/Alto.jpg",import.meta.url)
// const Alto1 = new URL("../../../assets/Alto1.jpg",import.meta.url)
const Alto2 = new URL("../../../assets/Alto2.jpg",import.meta.url)
const axia = new URL("../../../assets/axia.png",import.meta.url)
const aqua = new URL("../../../assets/aqua.jpg",import.meta.url)
const red = new URL("../../../assets/red.jpg",import.meta.url)
const bezza = new URL("../../../assets/bezza.jpg",import.meta.url)
const allion = new URL("../../../assets/allion.jpg",import.meta.url)
const premio = new URL("../../../assets/premio.jpg",import.meta.url)
const corolla = new URL("../../../assets/corolla.jpg",import.meta.url)
const bm = new URL("../../../assets/bm.jpg",import.meta.url)
const ax = new URL("../../../assets/ax.jpg",import.meta.url)
class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid >
                    <RentDashNav/>
                    {/*<div>*/}
                    {/*    <Link to="/" style={{position:'absolute', left:900, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>*/}
                    {/*    <Link to="aboutus" style={{position:'absolute', left:1000, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='About Us' wrapped={false} /></Link>*/}
                    {/*    <Link to="test" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Cars' wrapped={false} /></Link>*/}
                    {/*    <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>*/}
                    {/*    <Link to="driver" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Drivers' wrapped={false} /></Link>*/}
                    {/*</div>*/}

                </Grid>


                <Grid  item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3" style={{marginLeft:520, marginTop:10, color:"#00008B", fontWeight:"bold", fontSize:40}}>General Cars</Typography>
                </Grid>

                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3" style={{marginLeft:520, marginTop:500, color:"#00008B", fontWeight:"bold", fontSize:40}}>Premium Cars</Typography>
                </Grid>


                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3" style={{marginLeft:520, marginTop:460, color:"#00008B", fontWeight:"bold", fontSize:40}}>Luxury Cars</Typography>
                </Grid>




                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:120, left:20, position:"absolute"}}>
                    </Box>

                    <img src={Alto2} style={{position:"absolute", top:200, left:40,height:250,width:250}}/>

                    <h1 style={{position:"absolute",top:140,left:50,color:"white",fontSize:15}}>Suzuki Alto-Premium-Manual*7</h1>
                    <Button style={{position:"absolute",top:500, left:100}} variant="contained" color="error">
                        View more
                    </Button>

                    </Grid>



                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:600, left:20, position:"absolute"}}>
                    </Box>

                    <img src={bezza} style={{position:"absolute", top:680, left:40,height:250,width:250}}/>

                    <h1 style={{position:"absolute",top:630,left:45,color:"white",fontSize:15}}>Perodua Bezza Prime Sedan-Auto*5</h1>
                    <Button style={{position:"absolute",top:970, left:100}} variant="contained" color="error">
                        View more
                    </Button>

                </Grid>












                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:120, left:400, position:"absolute"}}>
                    </Box>
                    <img src={axia} style={{position:"absolute", top:200, left:422,height:250,width:250}}/>
                    {/*<img src={axia1} style={{position:"absolute", top:300, left:490,height:100,width:100}}/>*/}

                    <h1 style={{position:"absolute",top:140,left:430,color:"white",fontSize:15}}>Perodua (Daihatsu) Axia-Auto * 2</h1>

                    <Button style={{position:"absolute",top:500, left:480}} variant="contained" color="error">
                        View more
                    </Button>
                </Grid>



                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:600, left:400, position:"absolute"}}>
                    </Box>
                    <img src={allion} style={{position:"absolute", top:680, left:422,height:250,width:250}}/>
                    {/*/!*<img src={axia1} style={{position:"absolute", top:300, left:490,height:100,width:100}}/>*!/*/}

                    <h1 style={{position:"absolute",top:630,left:430,color:"white",fontSize:15}}>Toyota Allion NZT 260 * 3</h1>

                    <Button style={{position:"absolute",top:970, left:480}} variant="contained" color="error">
                        View more
                    </Button>
                </Grid>







                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:120, left:800, position:"absolute"}}>
                    </Box>

                    <img src={aqua} style={{position:"absolute", top:200, left:820,height:250,width:250}}/>


                    <h1 style={{position:"absolute",top:140,left:840,color:"white",fontSize:15}}>Toyota Prius C/ Aqua - Auto*8</h1>

                    <Button style={{position:"absolute",top:500, left:890}} variant="contained" color="error">
                        View more
                    </Button>

                </Grid>


                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:600, left:800, position:"absolute"}}>
                    </Box>

                    <img src={corolla} style={{position:"absolute", top:680, left:820,height:250,width:250}}/>


                    <h1 style={{position:"absolute",top:630,left:820,color:"white",fontSize:15}}>Toyota Corolla Axio/NZE141 * 4
                    </h1>

                    <Button style={{position:"absolute",top:970, left:890}} variant="contained" color="error">
                        View more
                    </Button>

                </Grid>













                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:120, left:1170, position:"absolute"}}>
                    </Box>

                    <img src={red} style={{position:"absolute", top:200, left:1190,height:250,width:250}}/>


                    <h1 style={{position:"absolute",top:140,left:1200,color:"white",fontSize:15}}>Suzuki Celerio - Auto * 5</h1>

                    <Button style={{position:"absolute",top:500, left:1280}} variant="contained" color="error">
                        View more
                    </Button>
                </Grid>



                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:600, left:1170, position:"absolute"}}>
                    </Box>

                    <img src={ax} style={{position:"absolute", top:680, left:1190,height:250,width:250}}/>


                    <h1 style={{position:"absolute",top:630,left:1220,color:"white",fontSize:15}}>Toyota Axio NKR 165 * 2</h1>

                    <Button style={{position:"absolute",top:970, left:1280}} variant="contained" color="error">
                        View more
                    </Button>
                </Grid>














                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:1150, left:20, position:"absolute"}}>
                    </Box>

                    <img src={bm} style={{position:"absolute", top:1250, left:40,height:250,width:250}}/>

                    <h1 style={{position:"absolute",top:1200,left:50,color:"white",fontSize:15}}>Mercedes * 2 BMW i8 * 2</h1>
                    <Button style={{position:"absolute",top:1540, left:100}} variant="contained" color="error">
                        View more
                    </Button>

                </Grid>



                <Grid>
                    <Box component="span" sx={{backgroundColor:"#000000", p: 2, border: '5px dashed white', width:250, height:400, top:1150, left:400, position:"absolute"}}>
                    </Box>
                    <img src={premio} style={{position:"absolute", top:1250, left:422,height:250,width:250}}/>


                    <h1 style={{position:"absolute",top:1200,left:450,color:"white",fontSize:15}}>Toyota Premio * 2</h1>

                    <Button style={{position:"absolute",top:1540, left:480}} variant="contained" color="error">
                        View more
                    </Button>
                </Grid>







            </Fragment>
        )
    }
}

export default Test;