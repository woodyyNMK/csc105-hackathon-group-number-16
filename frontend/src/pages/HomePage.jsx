import React from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import "../css/HomePage.css";
import MenuCard1 from "../components/MenuCard1";
import MenuCard2 from "../components/MenuCard2";
import MenuCard3 from "../components/MenuCard3";
import { Padding } from "@mui/icons-material";
export default function HomePage() {
  return (
    <Box className="signup_container">
      <Box className="Header">
        <Navbar />
      </Box>
      <Box className="Body">
        <Typography 
            component="div" 
            variant="h2"
            align="center"
            sx={{
                fontSize: "4rem",
                fontFamily: "Argent Cf",
                fontWeight: "bold",
                letterSpacing: "0.7rem",
                color: "#d89b65",
            }}
        >
          Menu
        </Typography>
        <Box sx={{display: { xs: "block", sm: "block", md: "none" }}}>
        <Grid container sx={{p:3}} rowSpacing={4} columnSpacing={3}>
          <Grid item xs={12} sm={6}>
          <MenuCard3/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <MenuCard3/>
          </Grid>
        </Grid>
        </Box>
        <Box sx={{display: { xs: "none", sm: "none", md: "block" }}}>
        <Grid container sx={{p:3}} rowSpacing={4} columnSpacing={3}>
          <Grid item md={12}>
          <MenuCard1/>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </Box>
  );
}
