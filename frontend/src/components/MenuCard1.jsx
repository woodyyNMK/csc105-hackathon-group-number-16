import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MenuCard1({image,name, desc1,desc2,desc3,menu_id}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ backgroundColor: "#0C0C1E", border: "1px solid #d89b65" }}>
      <CardActionArea sx={{ display: "flex", alignItems: "center" }} onClick={()=>navigate(`/MenuDetail/${menu_id}`)}>
        <CardMedia
          component="img"
          sx={{ width: "40%" }}
          image={image}
          alt="Live from space album cover"
        />
        <CardContent sx={{ width: "60%", display:"flex", flexDirection:"column",alignItems:"center" }} >
          <Typography
            component="div"
            variant="h5"
            align="center"
            sx={{
              fontFamily: "Argent Cf",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#d89b65",
              letterSpacing: "6px"
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Argent Cf",
              fontWeight: "bold",
              letterSpacing: "6px",
              color: "#bf835f",

            }}
          >
            - {desc1} - {desc2} - {desc3}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MenuCard1;
