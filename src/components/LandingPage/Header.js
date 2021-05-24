import React from 'react';
import { 
    Container,
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';
import Logo from '../../styles/assets/logo.png';

const Header = ({ setLoginOpen, setSignupOpen }) => {
    
    return (
        <AppBar
            color="transparent"
            id="header"
            className="header"
        >
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Toolbar >
                            <img src={Logo} className="header__logo" alt="abstergo-logo"/>
                            <Typography variant="h6" className="header__title">Abstergo</Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} component="nav">
                            <Grid item><Button color="inherit" href="#intro">Home</Button></Grid>
                            <Grid item><Button color="inherit" href="#features">Features</Button></Grid>
                            <Grid item><Button color="inherit" href="#services">Services</Button></Grid>
                            <Grid item><Button color="inherit" onClick={() => setLoginOpen(true)}>Login</Button></Grid>
                            <Grid item><Button color="inherit" onClick={() => setSignupOpen(true)}>Signup</Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default Header;