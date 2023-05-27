import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import MenuCard1 from "../components/MenuCard1";
import MenuCard2 from "../components/MenuCard2";
import MenuCard3 from "../components/MenuCard3";
import { AxiosError } from "axios";
import Axios from "../components/AxiosFront";
export default function HomePage() {
    const [items, setItems] = useState([]);
    React.useEffect(() => {
        // 2. call API to get items
        Axios.get("/getMenu").then((res) => {
          // 3. set items to state
          setItems(res.data.data);
        });
      }, []);
  return (
    <>
    <Navbar />
    <br/><br/><br/>
    <Box component="img" sx={{width: "100%"}} src="./assets/background1.png" alt="MainPhoto">
    </Box>
    <Box>
        <Typography 
            component="div" 
            variant="h2"
            align="center"
          sx={{
            marginTop: "20px",
            fontFamily: "Argent Cf",
            fontWeight: "bold",
            letterSpacing: "0.5rem",
              color: "#d89b65",
              fontSize: {
                xs: "32px",
                sm: "48px",
                md: "64px"
              }
            }}
        >
          Menu
        </Typography>
        <Box sx={{display: { xs: "block", sm: "block", md: "none" }}}>
        <Grid container sx={{p:3}} rowSpacing={5} columnSpacing={3}>
        {items.map((item) => (
            <Grid item xs={12} sm={6}>
            <MenuCard3
              name={item.menu_name}
              image={item.image2}
              desc1={item.sdesc1}
              desc2={item.sdesc2}
              desc3={item.sdesc3}
              menu_id = {item.id}
            />
            </Grid>
          ))}
        </Grid>
        </Box>
        <Box sx={{display: { xs: "none", sm: "none", md: "block" }}}>
        <Grid container sx={{paddingX:10,paddingY:3}} rowSpacing={5} columnSpacing={3}>
        {items.map((item) => (
            <Grid item md={12}>
            <MenuCard1
              name={item.menu_name}
              image={item.image2}
              desc1={item.sdesc1}
              desc2={item.sdesc2}
              desc3={item.sdesc3}
              menu_id = {item.id}
            />
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>
    </>
  );
}
