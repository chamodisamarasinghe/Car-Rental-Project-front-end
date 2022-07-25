import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import car2 from '../../../assets/car2.jpg';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import {Fragment} from "react";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Car = ({}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (


<Grid>
    <div>
        <Link to="/" style={{position:'absolute', left:1000, textDecoration:"none" ,color:'black',top:20 }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
        <Link to="about" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black',top:20 }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='About us' wrapped={false} /></Link>
        <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black',top:20 }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
        <Link to="driver" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black',top:20 }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Drivers' wrapped={false} /></Link>
    </div>





    <Card sx={{maxWidth: 345,ml:25,mt:20}}>
        <div style={{position:"absoulte",top:10}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        GC
                    </Avatar>
                }

                title="General Cars"

            />
            <CardMedia style={{ position:"absolute", top:150,left:100}}
                component="img"
                height="194"
                image={car2}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
        </div>





            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        GC
                    </Avatar>
                }

                title="General Cars"

            />
            <CardMedia
                component="img"
                height="194"
                image={car2}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
        </Card>
</Grid>
    );
}

export default Car