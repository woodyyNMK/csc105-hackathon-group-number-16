import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MenuCard3() {
  return (
    <Card sx={{alignItems:"center",backgroundColor:"#0C0C1E", border:"1px solid #d89b65"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image="./assets/temp.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" align="center" sx={{ fontFamily: "Argent Cf", fontWeight: "bold", color: "#d89b65", letterSpacing: "0.3rem", fontSize: { xs: "24px"}}}>
            Package
          </Typography>
          <Typography variant="body2" align="center" sx={{fontFamily:"Argent Cf", fontWeight:"bold", letterSpacing:"0.3rem",color:"#bf835f"}}>
            Appetizer <br/>- <br/>Main Course <br/>- <br/>Desert
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MenuCard3