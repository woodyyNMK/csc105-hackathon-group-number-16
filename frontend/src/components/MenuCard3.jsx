import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MenuCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/temp.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Package
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Appetizer - Main Course - Desert
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MenuCard3