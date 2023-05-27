import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import GlobalContext from "../components/GlobalContext";
import Cookies from "js-cookie";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";

export default function Card4({ image, price, name, itemId }) {
  const { user, setUser, setStatus, menus, setMenus } =
    React.useContext(GlobalContext);
  const itemDelete = async () => {
    // TODO: Implement delete item
    try {
      // 1. call API to delete item
      const userToken = Cookies.get("user");
      const response = await Axios.delete(`/Cart_menus/${itemId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      // 2. if successful, set status and remove note from state
      if (response.data.success) {
        setStatus({ severity: "success", msg: "Delete Menu successfully" });
        setMenus(menus.filter((i) => i.id !== itemId));
      }
    } catch (error) {
      // 3. if delete note failed, check if error is from calling API or not
      if (error instanceof AxiosError && error.response) {
        setStatus({ severity: "error", msg: error.response.data.error });
      } else {
        setStatus({ severity: "error", msg: error.message });
      }
    }
  };
  const chips = {
    backgroundColor: "#0c0c1e",
    "&:hover": {
      backgroundColor: "#0c0c1e",
    },
    color: "#d89b65",
    border: "1px solid #BFACE2",
    borderRadius: "15px",
    textTransform: "none",
    boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Card
      sx={{ display: "flex", flexGrow: 1 }}
      style={{
        backgroundColor: "#f2f2f2",
        borderRadius: "10px",
        boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
        margin: "0 10px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "15%", padding: "15px 10px" }}
        style={{ borderRadius: "30px" }}
        image={image}
        alt="Hoodie Image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          alignItems: "center",
          width: "75%",
          justifyContent: "space-around",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            style={{ color: "black", textAlign: "justify", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <br />
          <Typography
            variant="body2"
            style={{
              color: "gray",
              textAlign: "justify",
              fontWeight: "lighter",
            }}
          >
            {price}
          </Typography>
        </CardContent>
        <Box>
          <Button sx={chips} style={{ marginLeft: "50%" }}
           onClick={itemDelete}
           >
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
