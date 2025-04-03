import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import home from "../assets/images/Home.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Routes,Route } from 'react-router-dom';
import GetNow from "./GetNow.jsx";

const Home = () => {
  return (
    <Stack direction="row" height="100%" backgroundColor="black" color="white" style={{display:"flex"}}>
      <Box
        alignSelf="center"
        sx={{ position: "relative", left: "-160px", bottom: "70px",top:"50px"}}
      >
        <Typography
          backgroundColor="black"
          color="white"
          sx={{
           
            marginLeft: "200px",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Elevate&nbsp;your Workout
          <br></br>
        </Typography>

       
        <GetNow/>
       
      

  <Stack direction='row' marginLeft="250px" marginTop="50px " gap="20px" style={{flexShrink:"0.4"}}>
    <a href="https://www.facebook.com/GoldsGymIndia/"> <FacebookRoundedIcon sx={{ fontSize: 40, color: "white" }} /></a>
 
  <a href="https://www.instagram.com/raipurgoldsgym/?hl=en"><InstagramIcon sx={{ fontSize: 40, color: "white" }} /></a>
 <a href="https://x.com/i/flow/login?redirect_after_login=%2Fgoldsgym%2Fwith"> <TwitterIcon sx={{ fontSize: 40, color: "white" }} /></a>
  </Stack>
      </Box>
     
      <img
        src={home}
        alt="home"
        style={{
          height: "750px",
          width: "90%",
          position: "relative",
          left:"-50px"
        }}
      ></img>
    </Stack>
  );
};

export default Home;
