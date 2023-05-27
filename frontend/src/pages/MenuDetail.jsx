import React from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import "../css/MenuDetail.css"
function MenuDetail() {
  return (
    <div>
      <Navbar />

      <Typography
        align="center"
        sx={{
          fontFamily: "Argent Cf",
          fontSize: "80px",
          fontWeight: "bold",
          color: "#d89b65",
        }}
      >
        Course #
      </Typography>
      <div className="ext_wrapper">
      <Grid container sx={{p:3}}>
        {/* APPETIZER  */}
        <Box sx={{ display: "flex",width:"100%" }}>
          <Box
            className="description"
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              align="center"
              sx={{
                fontFamily: "Argent Cf",
                fontSize: "40px",
                fontWeight: "bold",
                color: "#d89b65",
              }}
            >
              Package
            </Typography>
            <Typography
              sx={{
                fontFamily: "Argent Cf",
                fontWeight: "bold",
                letterSpacing: "6px",
                color: "#bf835f",
              }}
            >
              - Appetizer - Main Course - Dessert
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{ width: "40%" }}
            image="./assets/temp.png"
            alt="Live from space album cover"
            src="./assets/background2.png"
          ></Box>
        </Box>

        {/* MAIN */}

        <Box sx={{ display: "flex" }}>
        <Box
            component="img"
            sx={{ width: "40%" }}
            image="./assets/temp.png"
            alt="Live from space album cover"
            src="./assets/background2.png"
          ></Box>
          <Box
            className="description"
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            
            <Typography
              component="div"
              variant="h5"
              align="center"
              sx={{
                fontFamily: "Argent Cf",
                fontSize: "40px",
                fontWeight: "bold",
                color: "#d89b65",
              }}
            >
              Package
            </Typography>
            <Typography
              sx={{
                fontFamily: "Argent Cf",
                fontWeight: "bold",
                letterSpacing: "6px",
                color: "#bf835f",
              }}
            >
              - Appetizer - Main Course - Dessert
            </Typography>
          </Box>
          
        </Box>

        {/* DESERT  */}

        <Box sx={{ display: "flex" }}>
          <Box
            className="description"
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              align="center"
              sx={{
                fontFamily: "Argent Cf",
                fontSize: "40px",
                fontWeight: "bold",
                color: "#d89b65",
              }}
            >
              Package
            </Typography>
            <Typography
              sx={{
                fontFamily: "Argent Cf",
                fontWeight: "bold",
                letterSpacing: "6px",
                color: "#bf835f",
              }}
            >
              - Appetizer - Main Course - Dessert
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{ width: "40%" }}
            image="./assets/temp.png"
            alt="Live from space album cover"
            src="./assets/background2.png"
          ></Box>
        </Box>
        </Grid>
      </div>
    </div>
  );
}

export default MenuDetail;
