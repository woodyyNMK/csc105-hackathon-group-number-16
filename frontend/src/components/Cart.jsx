import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";
import GlobalContext from "./GlobalContext";
import Card4 from "./Card4";
// import CheckOut from "./CheckOut";
import Cookies from "js-cookie";

const Cart = ({
  handleCartOpen = { handleCartOpen },
  openCartModal = false,
  setOpenCartModal = () => {},
}) => {
  const [address, setAddress] = React.useState("");
  const [addressError, setAddressError] = React.useState("");
  const [openCheckOutModal, setCheckOutModal] = React.useState(false);
  const handleCheckOutOpen = () => {
    setOpenCartModal(false);
    setCheckOutModal(true);
  };
  const handleCheckOutClose = () => {
    setCheckOutModal(false);
  };
  const { user, setUser, setStatus, menus, setMenus } =
    React.useContext(GlobalContext);
  const handleClose = () => {
    setOpenCartModal(false);
  };
  const modalStyle = {
    position: "absolute",
    bgcolor: "#0c0c1e",
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
  };
  const chips = {
    backgroundColor: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    color: "black",
    border: "1px solid #BFACE2",
    borderRadius: "30px",
    textTransform: "none",
    padding: "8px 0 8px 0",
    boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
    fontWeight: "bolder",
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const signField = {
    width: { md: "60%", xs: "80%" },
    fontFamily: "arial",
    marginLeft: { md: "20%", xs: "10%" },
    color: "#d89b65",
  };
  const signButton = {
    backgroundColor: "#f2f2f2",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#f2f2f2",
    },
    color: "#0C0C1E",
    width: { md: "60%", xs: "80%" },
    textTransform: "none",
    padding: "10px 0",
    fontFamily: "Adobe Garamond Pro",
    fontSize: { xs: "15px", md: "20px" },
    alignItems: "center",
    marginLeft: { md: "20%", xs: "10%" },
    fontWeight: "bold",
  };
  const validateForm = () => {
    let isValid = true;
    if (!address) {
      setAddressError("Address is required");
      isValid = false;
    }
    return isValid;
  };
  const [isChecked, setIsChecked] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    setHasError(false);
  };
  const purchaseItem = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setHasError(true);
    }
    if(!validateForm()) return;
    try{
          // 1. call API to delete item
    const checkout = 1;
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      Axios.post(
        "/Cart_menus",
        { checkout,address },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      ).then((res) => {
        setStatus({
          msg: "Purchase Menu successfully",
          severity: "success",
        });
        setCheckOutModal(false);
      });
    }
    }catch(e){
      setAddress('');
      if (e instanceof AxiosError) {
        // check if e.response exist
        if(e.response)
        return setStatus({
          msg:e.response.data.error,
          severity:'error',
        });
      }
      return setStatus({
        msg:e.message,
        severity:'error',
      });
    }

  };

  return (
    <Box>
      <Modal open={openCartModal} onClose={handleClose}>
        <Box
          sx={modalStyle}
          style={{ borderRadius: "30px" }}
          minHeight={"50vh"}
          maxHeight={"100vh"}
        >
          {/* {JSON.stringify(items, 2, null)} */}
          <br />
          <IconButton
            onClick={handleClose}
            style={{ marginLeft: "10px", color: "#d89b65" }}
          >
            <CloseIcon />
          </IconButton>
          <br />
          <Typography
            sx={headerTextStyle}
            style={{ textAlign: "center", color: "#d89b65" }}
          >
            CART
          </Typography>
          {/* {JSON.stringify(userToken)} */}
          {user ? (
            menus.length === 0 ? (
              <Typography
                textAlign="center"
                fontSize={18}
                color="white"
                fontWeight={300}
                marginTop={8}
              >
                No Items to show... <br />
                Let's browse new items.
              </Typography>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                  {menus.map((item) => (
                    <>
                      <Card4
                        name={item.menu_name}
                        price={item.menu_price}
                        image={item.menu_image}
                        itemId={item.id}
                      />
                      <br />
                    </>
                  ))}
                </Box>
                <Button
                  sx={chips}
                  style={{ marginBottom: "20px", width: "200px" }}
                  onClick={() => {
                    setOpenCartModal(false);
                    handleCheckOutOpen();
                  }}
                >
                  Check Out
                </Button>
              </Box>
            )
          ) : (
            <Typography
              textAlign="center"
              fontSize={18}
              color="white"
              fontWeight={300}
              marginTop={8}
            >
              Please login first to see items in cart.
            </Typography>
          )}
        </Box>
      </Modal>

      <Modal open={openCheckOutModal} onClose={handleCheckOutClose}>
        <Box sx={modalStyle} style={{ borderRadius: "30px" }}>
          <br />
          <IconButton
            onClick={handleCheckOutClose}
            style={{ marginLeft: "10px", color: "#d89b65" }}
          >
            <CloseIcon />
          </IconButton>
          <br />
          <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
            CheckOut
          </Typography>
          <form>
            <TextField
              sx={signField}
              style={{ backgroundColor: "#f2f2f2" }}
              label="Address"
              value={address}
              error={addressError !== ""}
              helperText={addressError}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
            <br></br>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheck}
                  sx={{ color: "#f2f2f2" }}
                />
              }
              label="  Cash On Delivery"
              sx={signField}
            />
            <Box sx={signField}>
                {hasError && (
                  <div style={{ color: "red" }}>Please check the box</div>
                )}
              </Box>

            <Button type="submit" onClick={purchaseItem} sx={signButton}>
              Purchase
            </Button>
            <br/>
            <br/>
            <br/>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
export default Cart;
