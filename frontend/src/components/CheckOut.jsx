import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";
import Cookies from "js-cookie";
import { useState } from "react";
import GlobalContext from './GlobalContext';
const CheckOut = ({
  handleCheckOutOpen={handleCheckOutOpen},
  openCheckOutModal,
  setCheckOutModal=()=>{},
}) =>{
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
  const {user,setUser,setStatus} = React.useContext(GlobalContext);
  const [isLogin, setIsLogin] = useState(true);
  const handleClose = () => {
    setCheckOutModal(false);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const signButton = {
    backgroundColor: "#f2f2f2",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#f2f2f2",
    },
    color:"#0C0C1E",
    width: { md: "60%", xs: "80%" },
    textTransform: "none",
    padding: "10px 0",
    fontFamily: "Adobe Garamond Pro",
    fontSize: { xs: "15px", md: "20px" },
    alignItems: "center",
    marginLeft: { md: "20%", xs: "10%" },
    fontWeight: "bold"
  };
  const signField = {
    width: { md: "60%", xs: "80%" },
    fontFamily: "arial",
    marginLeft: { md: "20%", xs: "10%" },
    color:"#d89b65",
  };
  const modalStyle = {
    position: "absolute",
    bgcolor: "#0c0c1e",
  //   height: { xs: "100%", md: "90%" },
    width: { xs: "100%", md: "60%" },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    justifyContent: "center",
    direction: "column",
  };
  const headerTextStyle = {
    fontFamily: "Roboto",
    fontSize: { xs: "20px", md: "30px" },
    color: "#d89b65",
  };
  const purchaseItem = () => {
    // 1. call API to delete item
    const checkout = 1;
  const userToken = Cookies.get('user');
  if (userToken !== undefined && userToken !== "undefined") {
  Axios.post("/Cart_menus",{checkout}
  ,{
    headers: { 
      Authorization: `Bearer ${userToken}` 
    }
  }
  ).then((res) =>{
    setStatus({
      msg: 'Purchase Menu successfully',
      severity: 'success'
    });
    setCheckOutModal(false);
  });
}
};
  return(
    <Box>

      <Modal open={openCheckOutModal} onClose={handleClose}>
        <Box sx={modalStyle} style={{borderRadius:"30px"}}>
          <br/>
          <IconButton onClick={handleClose} style={{marginLeft:"10px",color: "#d89b65" }}>
            <CloseIcon />
          </IconButton>
          <br />
          <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
            CheckOut
          </Typography>
          <form>
            <TextField
              sx={signField}
              style={{ backgroundColor: "#f2f2f2"}}
              label="Email"
              value={address}
              error={addressError !== ""}
              helperText={addressError}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
            <br></br>
            <br />

            <Button onClick={purchaseItem} sx={signButton}>
              Purchase
            </Button>
          </form>
        </Box>
      </Modal>

    </Box>
  );
};
export default CheckOut;