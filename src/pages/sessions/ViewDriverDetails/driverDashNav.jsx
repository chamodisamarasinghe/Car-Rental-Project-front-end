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

export default function DriverDashNav() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Easy Car Rental
                    </Typography>


                    <Link href="/" underline="none">
                        <Button  color='primary' variant="contained" >Home</Button>
                    </Link>




                    <Link href="viewSchedule" underline="none">
                        <Button  color='primary' variant="contained" sx={{ml:2}}>View Schedule</Button>
                    </Link>




                </Toolbar>
            </AppBar>
        </Box>
    );
}
