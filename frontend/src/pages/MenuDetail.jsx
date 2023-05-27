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
          fontSize: {
            xs: "40px",
            sm: "50px",
            md: "70px"
          },
          fontWeight: "bold",
          color: "#d89b65",
        }}
      >
        Course #
      </Typography>
      <div className="ext_wrapper" style={{paddingLeft: "20px", paddingRight: "20px"}}>
      <Grid container sx={{p:3, border: "1px solid #d89b65", padding: "10px"}}>
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
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "40px"
                },
                fontWeight: "bold",
                color: "#d89b65",
              }}
            >
              Package
            </Typography>
            <Typography
              sx={{
                fontFamily: "Argent Cf",
                textAlign: "center",
                  color: "#bf835f",
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "30px"
                  },
                  padding: '10px'
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

        <Box sx={{ display: "flex", marginTop: "10px"}}>
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
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "40px"
                },
                fontWeight: "bold",
                color: "#d89b65",
              }}
            >
              Package
            </Typography>
            <Typography
              sx={{
                fontFamily: "Argent Cf",
                textAlign: "center",
                  color: "#bf835f",
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "30px"
                  },
                  padding: "10px"
              }}
            >
              - Appetizer - Main Course - Dessert
            </Typography>
          </Box>
          
        </Box>

        {/* DESERT  */}

          <Box sx={{ display: "flex", marginTop: "10px" }}>
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
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "40px"
                },
                fontWeight: "bold",
                color: "#d89b65",
              }}
            >
              Package
            </Typography>
            <Typography
              sx={{
                fontFamily: "Argent Cf",
                textAlign: "center",
                  color: "#bf835f",
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "30px"
                  },
                  padding: "10px"
              }}
            >
              tender salmon fillet wrapped in crispy puff pastry
 with a spinach and mushroom filling. I like to serve it with 
a thin lemon-mustard sauce
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
