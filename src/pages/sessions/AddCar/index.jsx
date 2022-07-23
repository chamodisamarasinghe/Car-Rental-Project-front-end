import {Typography} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import React, {Component, Fragment} from 'react';
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



class DashBoard extends Component {


    constructor(props) {
        super(props);

    }
    render() {
        const itemData = [
            {
                img: 'https://cdn.excellenceriviera.com/v7/excellenceriviera.com/wp-content/uploads/2020/06/Luxury-SUV-Car.jpg',
                title: 'Suzuki Alto - Premium Manual *7',
                author: 'Daily rate-2500/=',

            },
            {
                img: 'https://cdn.excellenceriviera.com/v7/excellenceriviera.com/wp-content/uploads/2020/06/Luxury-SUV-Car.jpg',
                title: 'Burger',
                author: '@rollelflex_graphy726',
            },
            {
                img: 'https://cdn.excellenceriviera.com/v7/excellenceriviera.com/wp-content/uploads/2020/06/Luxury-SUV-Car.jpg',
                title: 'Camera',
                author: '@helloimnik',
            },
            {
                img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                title: 'Coffee',
                author: '@nolanissac',
            },
            {
                img: 'https://www.bmw.cc/en/all-models/x-series.html',
                title: 'Hats',
                author: '@hjrc33',
            },
            {
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                title: 'Honey',
                author: '@arwinneil',
            },
            {
                img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                title: 'Basketball',
                author: '@tjdragotta',
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
                author: '@katie_wasserman',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
                author: '@silverdalex',
            },
            {
                img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                title: 'Tomato basil',
                author: '@shelleypauls',
            },
            {
                img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                title: 'Sea star',
                author: '@peterlaster',
            },
            {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
                author: '@southside_customs',
            },
        ];








        const { classes } = this.props;
        return (
            <Fragment>
                <div>
                    <Link to="/" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
                    <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
                    <Link to="item" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Item' wrapped={false} /></Link>
                </div>

                <div className={classes.title__container}>
                    <Typography variant="h4" >
                        DashBoard
                    </Typography>
                </div>






                <ImageList sx={{ width: 1500, height: 1200 }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>by: {item.author}</span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>








            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(DashBoard)