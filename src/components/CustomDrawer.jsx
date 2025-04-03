import React, { useState } from 'react';
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      <IconButton 
        onClick={handleDrawerToggle} 
        className="hamburger-menu-btn"
      >
        <MenuIcon className="hamburger-icon" />
      </IconButton>

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "black",
            height: "100vh",
            padding: "20px",
            position: "relative"
          }}
        >
          {/* Close Button */}
          <CloseIcon
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
              color: "#f8f8f8",
              fontSize: "30px"
            }}
          />

          <Typography color="#f8f8f8" fontSize="24px" fontWeight={700} mb={2}>
            GymFluencer
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Link to="/" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
              <Typography sx={{ color: "#f8f8f8" }}>Home</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
              <Typography sx={{ color: "#f8f8f8" }}>About</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
              <Typography sx={{ color: "#f8f8f8" }}>Contact</Typography>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomDrawer;