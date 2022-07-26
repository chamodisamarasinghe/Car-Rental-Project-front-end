import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

export default function AdminDashNav() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"bold" }}>
                        Easy Car Rental
                    </Typography>

                    <Link href="/" underline="none">
                        <Button  color='primary' variant="contained" >Home</Button>
                    </Link>


                    <Link href="customerManage" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:1}}>Manage Customer</Button>
                    </Link>


                    <Link href="driver" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:2}}>Manage Driver</Button>
                    </Link>

                    <Link href="addcar" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:3}}>Manage Car</Button>
                    </Link>


                    <Link href="viewRequest" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:4}}>View Rental Request</Button>
                    </Link>

                    <Link href="income" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:5}}>Income</Button>
                    </Link>

                    <Link href="summary" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:6}}>Daily Summary</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
