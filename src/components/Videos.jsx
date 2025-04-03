import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const Videos = ({ data }) => {
  return (
    <Box sx={{gap:"30px" , display:"flex",flexWrap:"wrap",position:"relative",left:"20%"}}>
      {data.map((el, ndex) => (
        <Box  sx={{gap:"20px"}}>
          <Link to={`https://www.youtube.com/watch?v=${el.id.videoId}`}>
            <img
              src={el.snippet.thumbnails.high.url}
              style={{
                transition: "box-shadow 0.3s ease-in-out",
                borderRadius: "8px",
              }}
             
            ></img>
          </Link>

          <Typography style={{ color: "#FFD700"}}>TITLE &nbsp;: &nbsp;  &nbsp;{el.snippet.title}</Typography>
          <br></br>
          <Typography sx={{color:"white"}}>Click on the Video for Tutorial</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
