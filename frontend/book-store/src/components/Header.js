import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();

    return (
        <AppBar position="sticky" color="primary">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <BookIcon sx={{ fontSize: 40, marginRight: 1, color: '#fff' }} />
                        Book  Heaven
                    </Typography>
                    <Tabs
                        textColor='inherit'
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab component={NavLink} to="/add" label='Add Product' sx={{ textDecoration: 'none', color: '#fff' }} />
                        <Tab component={NavLink} to="/books" label='Books' sx={{ textDecoration: 'none', color: '#fff' }} />
                        <Tab component={NavLink} to="/about" label='About Us' sx={{ textDecoration: 'none', color: '#fff' }} />
                    </Tabs>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
