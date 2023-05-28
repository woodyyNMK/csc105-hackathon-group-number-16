import {
    Button,
    AppBar,
    Box,
    Toolbar,
    Typography,
  } from "@mui/material";
  import {
    AccountCircle,
    Logout,
    ShoppingCart,
  } from "@mui/icons-material";
  import LogIn from "./LogIn"
  import Cart from "./Cart"
  import { useContext,useState } from "react";
  import React from "react"
  import GlobalContext from '../components/GlobalContext';
  import Cookies from "js-cookie";
  import { AxiosError } from "axios";
  import Axios from "./AxiosFront";
  import { useNavigate } from "react-router-dom";
  import "../fonts/Monsieur_La_Doulaise/MonsieurLaDoulaise-Regular.ttf";

  export default function NavTop1() {
    const navigate = useNavigate();
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const handleLoginOpen = () => setOpenLoginModal(true);

    const [openCartModal, setOpenCartModal] = useState(false);
    // const [openPastOrderModal, setOpenPastOrderModal] = useState(false);
    const {user,setUser,setStatus,menus,setMenus} = useContext(GlobalContext);
    
    const handleCartOpen = () => {
      setOpenCartModal(true);
      const userToken = Cookies.get("user");
      if (userToken !== undefined && userToken !== "undefined") {
        // 2. call API to get items
        Axios.get("/Cart_menus", {
          headers: { Authorization: `Bearer ${userToken}` },
        }).then((res) => {
          // 3. set items to state
          setMenus(res.data.data);
          setStatus({
            msg : "loaded the menu in cart"
          })
        });
      }
    }
    
    const buttonWrap = {
      backgroundColor: "transparent",
      border: "1px solid #d89b65",
      borderRadius: "30px",
    };
    const bL = {
      color: "#d89b65",
      "&:hover": {
        backgroundColor: "transparent",
      },
      borderRight: "1px solid #d89b65",
      backgroundColor: "#0C0C1E",
      borderRadius: "30px 0 0 30px",
      
    };
    const bR = {
      color: "#d89b65",
      "&:hover": {
        backgroundColor: "transparent",
      },
      backgroundColor: "#0C0C1E",
      borderRadius: "0 30px 30px 0",
    };
    
    const logOut = () => {
      setUser();
      Cookies.remove("user");
    };

    return (
      <div>
        <AppBar sx={{backgroundColor:"#f2f2f2", border:"3px solid #bf835f"}}>
          <Toolbar sx={{ justifyContent: "space-between", height: "20%" }}>
          <Button variant="text" href="/" sx={{ textTransform: "none", textDecoration: "none", fontFamily:"MonsieurLaDoulaise", fontSize: {xs: "23px", sm: "35px", md: "40px"}, color: "#0C0C1E", fontWeight: "bold"}}>
              Oceanic Rhapsody
            </Button>
           
            <Box sx={buttonWrap}>
              <Button sx={bL} style={{ maxWidth: "40px", minWidth: "40px" }} onClick={handleCartOpen}>
                <ShoppingCart />
              </Button>
              {/* {JSON.stringify(user)} */}
              {user ?(<Button sx={bR} style={{ maxWidth: "40px", minWidth: "40px" }} onClick={logOut}>
                <Logout/>
              </Button>):(<Button sx={bR} style={{ maxWidth: "40px", minWidth: "40px" }} onClick={handleLoginOpen}>
                <AccountCircle />
              </Button>)}
              <LogIn handleLoginOpen={handleLoginOpen} open={openLoginModal} setOpen={setOpenLoginModal} />
              <Cart handleCartOpen={handleCartOpen} openCartModal={openCartModal} setOpenCartModal={setOpenCartModal}/>
            </Box>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
  