import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { CardActionArea } from '@mui/material';

function MenuCard1() {
    const theme = useTheme();
  return (
    <Card sx={{backgroundColor:"#0C0C1E", border:"1px solid #d89b65"}}>
    <CardActionArea sx={{ display: 'flex', alignItems:"center" }}> 
    <CardMedia
      component="img"
      sx={{ width: "40%" , height: "35%"}}
      image="./assets/temp.png"
      alt="Live from space album cover"
    />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" align="center" sx={{fontFamily:"Argent Cf", fontSize:"4rem",fontWeight:"bold",color:"#d89b65"}}>
          Package
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" align="center" sx={{fontFamily:"Argent Cf", fontWeight:"bold", letterSpacing:"0.6rem", color:"#bf835f"}}>
          Appetizer - Main Course - Desert
        </Typography>
      </CardContent>
      </CardActionArea> 
    
  </Card>
  )
}

export default MenuCard1