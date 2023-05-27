import CloseIcon from "@mui/icons-material/Close";
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
import Cookies from "js-cookie";

const Cart = ({
  handleCartOpen = { handleCartOpen },
  openCartModal = false,
  setOpenCartModal = () => {},
}) => {
  const { user, setUser, setStatus, items, setItems } =
    React.useContext(GlobalContext);
  const handleClose = () => {
    setOpenCartModal(false);
  };
  const purchaseItem = () => {
    // 1. call API to delete item
    const checkout = 1;
  const userToken = Cookies.get('user');
  if (userToken !== undefined && userToken !== "undefined") {
  Axios.post("/Cart_items",{checkout}
  ,{
    headers: { 
      Authorization: `Bearer ${userToken}` 
    }
  }
  ).then((res) =>{
    setStatus({
      msg: 'Purchase Item successfully',
      severity: 'success'
    });
    setOpenCartModal(false);
  });
}
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
    backgroundColor: "#BFACE2",
    "&:hover": {
      backgroundColor: "#BFACE2",
    },
    color: "black",
    border: "1px solid #BFACE2",
    borderRadius: "30px",
    textTransform: "none",
    padding: "8px 0 8px 0",
    boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
    fontWeight: "bolder",
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
          <IconButton onClick={handleClose} style={{ marginLeft: "10px",color: "#d89b65" }}>
            <CloseIcon />
          </IconButton>
          <br />
          <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
            CART
          </Typography>
          {/* {JSON.stringify(userToken)} */}
          {/* <Card4 image={item.image} price={item.price} name={item.name}  /> */}
          {user ? (
            items.length === 0 ? (
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
              <Box sx={{display:"flex", flexDirection:"column",alignItems:"center"}}>
              <Box>
                {items.map((item) => (
                  <>
                    <Card4
                      name={item.product_name}
                      price={item.product_price}
                      image={item.product_image}
                      itemId={item.id}
                    />
                    <br />
                  </>
                ))}
              </Box>
              <Button
              sx={chips}
              style={{ marginBottom: "20px", width: "200px" }}
              onClick={purchaseItem}
            >
              Purchase
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
    </Box>
  );
};
export default Cart;
