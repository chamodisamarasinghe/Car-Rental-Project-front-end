import {Typography} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import React, {Component, Fragment} from 'react';
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



class DashBoard extends Component {


    constructor(props) {
        super(props);

    }
    render() {
        const itemData = [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
            },
            {
                img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                title: 'Burger',
            },
            {
                img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                title: 'Camera',
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



                <ImageList sx={{ width: 500, height: 450, position:'absolute', left:400, top:150 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>



            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(DashBoard)