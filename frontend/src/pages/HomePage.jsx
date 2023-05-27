import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';
import "../css/HomePage.css"
import MenuCard1 from '../components/MenuCard1';
import MenuCard2 from '../components/MenuCard2';
import MenuCard3 from '../components/MenuCard3';
export default function HomePage() {
  
   
    return (
    <div className="signup_container">
        <Box className="Header">
            <Navbar/>
            
        </Box>
        <div className='Body'>

            <Typography align="center" sx={{fontSize: "4rem",fontFamily:"Argent Cf", fontWeight:"bold", letterSpacing:"0.7rem", color:"#d89b65"}}>
                Menu
            </Typography>
            <div className='c1'>
            <MenuCard1 />
            </div>
            <div className='c2'>
            <MenuCard2 sx={{width:"50%"}}/>
            </div>
            <div className='c3'>
            <MenuCard3/>
            </div>
        </div>
    </div>
  )
}