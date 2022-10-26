import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import img from './images/cc-logo.png'
import line from './images/line.png'
import medal from './images/premium-icon.svg'

const Navbar = () => {
    return (
        <div>
            <Box>
                <AppBar position="static" style={{ background: '#FFFFFF' }}>
                    <Toolbar>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item><Box><img src={img} alt="img" style={{ height: "50px", width: "140px" }} /></Box></Grid>
                            <Grid item alignItems="center">

                                <Button style={{ minWidth: '100px', maxHeight: '30px', padding: '15px' }} sx={{ color: 'black', ':hover': { borderColor: '#4a4a4a', color: 'black'} }}><bold>Practice</bold></Button>

                                <Button style={{ minWidth: '100px', maxHeight: '30px', padding: '10px' }} sx={{ color: 'black', ':hover': { borderColor: '#4a4a4a', color: 'black' } }}><bold>Compete</bold></Button>

                                <Button style={{ minWidth: '100px', maxHeight: '30px', padding: '10px' }} sx={{ color: 'black', ':hover': { borderColor: '#4a4a4a', color: 'black'} }}><bold>Learn</bold></Button>

                                <Button style={{ minWidth: '100px', maxHeight: '30px', padding: '10px' }} sx={{ color: '#6b4024', ':hover': { backgroundColor: '#fdd8c0', color: '#6b4024'} }}> <img src={medal} alt="img" style={{ margin: "0", padding: "10px", height: "20px", width: "20px" }} /> <strong>Upgrade to pro</strong></Button>

                                <img src={line} alt="img" style={{ margin: "0", padding: "0", height: "25px", width: "5px" }} />

                                <Button style={{ minWidth: '100px', maxHeight: '30px', padding: '10px' }} sx={{ color: '#2a67b1', ':hover': { borderColor: '#4a4a4a', color: '#2a67b1', boxShadow: 1 } }}><bold>Login</bold></Button>


                                <Button variant="outlined" style={{ minWidth: '100px', maxHeight: '30px', }} sx={{ color: '#2a67b1', borderColor: '#2a67b1', '&:hover': { backgroundColor: '#2a67b1', color: 'white' }, }}>Sign up</Button>


                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar