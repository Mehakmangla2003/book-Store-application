import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="#f5f5f5" // Background color
      padding={4} // Padding for the entire box
    >
      <Typography variant="h3" mb={3} style={{ fontFamily: 'cursive', color: '#333' }}>
        <strong>BookHeaven</strong>
      </Typography>

      <Typography variant="h5" mb={3}>
        Welcome to Our Book Store
      </Typography>

      <Typography variant="body1" textAlign="center" mb={3}>
        Explore a wide collection of books that cater to all interests and genres.
        Find your next great read with us!
      </Typography>

      <Button
        LinkComponent={Link}
        to="/books"
        sx={{ marginTop: 3, background: "#e44d26", color: "#fff", '&:hover': { backgroundColor: "#333" } }}
        variant="contained"
      >
        <Typography variant="h6">View All Products</Typography>
      </Button>
    </Box>
  );
};

export default Home;
