import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import { AxiosError } from "axios";
import Axios from "../components/AxiosFront";
import GlobalContext from "../components/GlobalContext";
import Cookies from "js-cookie";
function MenuDetail() {
  const { user, setUser, setStatus, menus, setMenus } =
  React.useContext(GlobalContext);
  const { id } = useParams();
  const [details, setDetails] = useState({});
  React.useEffect(() => {
    // 2. call API to get items
    Axios.get(`/MenuDetail/${id}`).then((res) => {
      // 3. set items to state
      setDetails(res.data.data);
    });
  }, []);
  const menu_id = id;
  const menu_name = details.menu_name;
  const desc1 = details.desc1;
  const desc2 = details.desc2;
  const desc3 = details.desc3;
  const desc1a = details.desc1a;
  const desc2a = details.desc2a;
  const desc3a = details.desc3a;
  const image1 = details.image1;
  const image2 = details.image2;
  const image3 = details.image3;
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Typography
        align="center"
        sx={{
          fontFamily: "Argent Cf",
          fontSize: {
            xs: "40px",
            sm: "50px",
            md: "70px",
          },
          fontWeight: "bold",
          color: "#d89b65",
        }}
      >
        Course {menu_id}
      </Typography>
      <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
        <Grid container sx={{ p: 3, border: "1px solid #d89b65" }}>
          {/* APPETIZER  */}
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Box
              className="description"
              sx={{
                width: "65%",
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
                    md: "40px",
                  },
                  fontWeight: "bold",
                  color: "#d89b65",
                }}
              >
                {desc1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Argent Cf",
                  textAlign: "center",
                  color: "#bf835f",
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "30px",
                  },
                  padding: "10px",
                }}
              >
                {desc1a}
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{ width: "35%" }}
              image="./assets/temp.png"
              alt="Live from space album cover"
              src={image1}
            ></Box>
          </Grid>
          <br />
          <br />

          {/* MAIN */}

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              sx={{ width: "35%" }}
              image={image2}
              alt="Live from space album cover"
              src={image2}
            ></Box>
            <Box
              className="description"
              sx={{
                width: "65%",
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
                    md: "40px",
                  },
                  fontWeight: "bold",
                  color: "#d89b65",
                }}
              >
                {desc2}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Argent Cf",
                  textAlign: "center",
                  color: "#bf835f",
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "30px",
                  },
                  padding: "10px",
                }}
              >
                {desc2a}
              </Typography>
            </Box>
          </Grid>
          <br />
          <br />
          {/* DESERT  */}

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Box
              className="description"
              sx={{
                width: "65%",
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
                    md: "40px",
                  },
                  fontWeight: "bold",
                  color: "#d89b65",
                }}
              >
                {desc3}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Argent Cf",
                  textAlign: "center",
                  color: "#bf835f",
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "30px",
                  },
                  padding: "10px",
                }}
              >
                {desc3a}
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{ width: "35%" }}
              image="./assets/temp.png"
              alt="Live from space album cover"
              src={image3}
            ></Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default MenuDetail;
