import React from "react";
import ImageList from "@mui/material/ImageList";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <ImageList
      gap={10}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.map((el) => (
        <Link to="./description" state={{ exercise: el }} key={el.id} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "2px solid aqua",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s",
              '&:hover': {
                transform: "scale(1.05)",
              },
            }}
          >
            <img src={el.gifUrl} alt="GIF" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            <Typography
              sx={{
                backgroundColor: "white",
                textTransform: "uppercase",
                fontWeight: "bold",
                mt: 2,
                color: "black",
              }}
            >
              {el.name}
            </Typography>
            <button
              style={{
                backgroundColor: "peachpuff",
                borderRadius: "10px",
                textTransform: "uppercase",
                fontWeight: "bold",
                mt: 1,
                color: "black",
                '&:hover': {
                  backgroundColor: "#f5b7a0", // Slightly darker peach
                },
              }}
            >
              {el.target}
            </button>
          </Box>
        </Link>
      ))}
    </ImageList>
  );
};

export default Cards;
