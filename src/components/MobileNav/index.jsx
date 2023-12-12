import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

const MobileNav = ({ open, onClose }) => {
  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <Box
        sx={{
          height: "360px",
          width: "100%",
          display: "grid",
          placeItems: "center",
          background: "#072238",
          backdropFilter: "blur(1px)",
        }}
      >
        <Typography sx={{ fontSize: 45, color: "blue" }}>Mobile Nav</Typography>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
