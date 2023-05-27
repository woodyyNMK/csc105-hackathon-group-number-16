import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MenuCard3({image,name, desc1,desc2,desc3,menu_id}) {
  const navigate = useNavigate();
  return (
    <Card sx={{alignItems:"center",backgroundColor:"#0C0C1E", border:"1px solid #d89b65"}}>
      <CardActionArea onClick={()=>navigate(`/MenuDetail/${menu_id}`)}>
        <CardMedia
          component="img"
          width="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" align="center" sx={{ fontFamily: "Argent Cf", fontWeight: "bold", color: "#d89b65", letterSpacing: "0.3rem", fontSize: { xs: "24px"}}}>
            {name}
          </Typography>
          <Typography variant="body2" align="center" sx={{fontFamily:"Argent Cf", fontWeight:"bold", letterSpacing:"0.3rem",color:"#bf835f"}}>
            {desc1} <br/>- <br/>{desc2} <br/>- <br/>{desc3}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MenuCard3