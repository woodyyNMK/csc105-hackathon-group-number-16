import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MenuCard3() {
  return (
    <Card sx={{ maxWidth: 300,maxHeight: 400, alignItems:"center",backgroundColor:"#0C0C1E", border:"1px solid #d89b65"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="20%"
          width="15%"
          image="./assets/temp.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" sx={{fontFamily:"Argent Cf", fontSize:"2.5rem",fontWeight:"bold",color:"#d89b65"}}>
            Package
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{fontFamily:"Argent Cf", fontWeight:"bold", letterSpacing:"0.6rem",color:"#bf835f"}}>
            Appetizer <br/>- <br/>Main Course <br/>- <br/>Desert
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MenuCard3