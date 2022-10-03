import * as React from 'react';
import './ButtonAppBar.css';
import logo from './levvel-logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";

const theme = createTheme({
    palette: {
        neutral: {
            main: '#ffffff',
            contrastText: '#fff',
        },
    },
});

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static" style={{background: '#184B64'}}>
                <Toolbar>
                    <img src={logo} alt="logo" width="5%" style={{marginRight: 30}}/>
                    <ThemeProvider theme={theme}>
                        <Button size="large" href="/" color="neutral">Home</Button>
                        <Button size="large" href="/Blogs" color="neutral">Blogs</Button>
                    </ThemeProvider>
                    <h1 className="bar-text">Levvel's Food Blog</h1>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
