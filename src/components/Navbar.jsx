import React from "react";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import dumbell from "../assets/images/dumbell.jpg";

const Navbar = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
      }}
      direction="row"
    >
      <Typography fontSize="33px" color="#f8f8f8" fontWeight={1000}>
        GymFluencer
      </Typography>

      <Box display="flex" alignItems="center" gap={{ xs: "15px", md: "40px" }} flexWrap="wrap">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            color="#f8f8f8"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Home
          </Typography>
        </Link>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <Typography
            color="#f8f8f8"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            About
          </Typography>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Typography
            color="#f8f8f8"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Contact
          </Typography>
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Link to="joinNow">
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid white",
              color: "black",
              transition: "background-color 0.2s",
              width: "80px",
              height: "35px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
            onMouseDown={(e) => (e.target.style.backgroundColor = "grey")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "white")}
          >
            Join Now
          </button>
        </Link>
        <img
          src={dumbell}
          style={{ paddingTop: "8px", width: "50px" }}
          alt="dumbell"
        />
      </Box>
    </Stack>
  );
};

export default Navbar;
