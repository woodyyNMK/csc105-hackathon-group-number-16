import {
    Button,
    AppBar,
    Box,
    Toolbar,
    Typography,
  } from "@mui/material";
  import {
    AccountCircle,
    ShoppingCart,
  } from "@mui/icons-material";
  import LogIn from "./LogIn"
  import { useContext,useState } from "react";
  import React from "react"
  import GlobalContext from '../components/GlobalContext';
  import Cookies from "js-cookie";
  import { AxiosError } from "axios";
  import Axios from "./AxiosFront";
  import { useNavigate } from "react-router-dom";
  export default function NavTop1() {
    const navigate = useNavigate();
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const handleLoginOpen = () => setOpenLoginModal(true);

    // const [openCartModal, setOpenCartModal] = useState(false);
    // const [openPastOrderModal, setOpenPastOrderModal] = useState(false);
    const {user,setUser,setStatus,items,setItems,pastItems,setPastItems} = useContext(GlobalContext);
    
    // const handleCartOpen = () => {
    //   setOpenCartModal(true);
    //   const userToken = Cookies.get("user");
    //   if (userToken !== undefined && userToken !== "undefined") {
    //     // 2. call API to get items
    //     Axios.get("/Cart_items", {
    //       headers: { Authorization: `Bearer ${userToken}` },
    //     }).then((res) => {
    //       // 3. set items to state
    //       setItems(res.data.data);
    //       setStatus({
    //         msg : "loaded the items in cart"
    //       })
    //     });
    //   }
    // }
    // const handlePastOrderOpen = () => {
    //   setOpenPastOrderModal(true);
    //   const userToken = Cookies.get("user");
    //   if (userToken !== undefined && userToken !== "undefined") {
    //     // 2. call API to get items
    //     Axios.get("/Past_items", {
    //       headers: { Authorization: `Bearer ${userToken}` },
    //     }).then((res) => {
    //       // 3. set items to state
    //       setPastItems(res.data.data);
    //       setStatus({
    //         msg : "loaded the purchased items in cart"
    //       })
    //     });
    //   }
    // }
    
    const buttonWrap = {
      backgroundColor: "transparent",
      border: "1px solid black",
      borderRadius: "30px",
    };
    const bL = {
      color: "black",
      "&:hover": {
        backgroundColor: "transparent",
      },
      borderRight: "1px solid black",
      backgroundColor: "transparent",
      borderRadius: "30px 0 0 30px",
    };
    const bR = {
      color: "black",
      "&:hover": {
        backgroundColor: "transparent",
      },
      backgroundColor: "transparent",
      borderRadius: "0 30px 30px 0",
    };
  
    return (
      <div>
        <AppBar sx={{backgroundColor:"transparent"}} position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:"1rem",fontWeight:"300", fontFamily:"Adobe Garamound Pro",letterSpacing:6}}>
              Oceanic Rhapsody
            </Typography>
           
            <Box sx={buttonWrap}>
              <Button sx={bL} style={{ maxWidth: "40px", minWidth: "40px" }}>
                <ShoppingCart />
              </Button>
              {/* {JSON.stringify(user)} */}
              <Button sx={bR} style={{ maxWidth: "40px", minWidth: "40px" }} onClick={handleLoginOpen}>
                <AccountCircle />
              </Button>
              <LogIn handleLoginOpen={handleLoginOpen} open={openLoginModal} setOpen={setOpenLoginModal} />
              {/* <Cart handleCartOpen={handleCartOpen} openCartModal={openCartModal} setOpenCartModal={setOpenCartModal}/> */}
            </Box>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
  