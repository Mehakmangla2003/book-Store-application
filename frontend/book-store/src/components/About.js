import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        p={4} // Adding padding for better spacing
      >
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: "2.5rem", // Adjust font size
            fontWeight: "bold", // Make it bold
            color: "#1a237e", // Set text color
            marginBottom: 2, // Add margin at the bottom
          }}
        >
          Welcome to [Your Book Store App Name]!
        </Typography>
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: "1rem", // Adjust font size
            color: "#424242", // Set text color
            lineHeight: 1.5, // Increase line height for better readability
            marginBottom: 2, // Add margin at the bottom
          }}
        >
          At [Your Book Store App Name], we are dedicated to providing a
          delightful reading experience for book enthusiasts of all kinds.
          Explore our curated collection, find your next favorite read, and
          immerse yourself in the world of literature.
        </Typography>
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: "1rem", // Adjust font size
            color: "#424242", // Set text color
            lineHeight: 1.5, // Increase line height for better readability
            marginBottom: 2, // Add margin at the bottom
          }}
        >
          Our mission is to connect readers with stories that inspire,
          educate, and entertain. Whether you're a seasoned bookworm or just
          starting your reading journey, we've created a space where you can
          discover, discuss, and share your love for books.
        </Typography>
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: "1rem", // Adjust font size
            color: "#1a237e", // Set text color
            fontWeight: "bold", // Make it bold
          }}
        >
          Thank you for choosing [Your Book Store App Name]. Happy reading!
        </Typography>
      </Box>
    </div>
  );
};

export default About;
