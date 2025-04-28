import React from "react";
import Navbar from "../Layouts/Navbar";
import HeroSection from "../Layouts/HeroSection";
import Footer from "../Layouts/Footer";
import { Box } from "@mui/material";
const AuthPage = () => {
  return (
    <>
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          position:'relative'
        }}
      >
        <Navbar />
        <HeroSection />
        <Footer />
      </Box>
    </>
  );
};

export default AuthPage
