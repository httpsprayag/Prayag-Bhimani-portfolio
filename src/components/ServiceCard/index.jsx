import React from "react";
import { Box, Rating, Typography } from "@mui/material";

const ServiceCard = ({ title, review }) => {
  return (
    <Box
      sx={{
        background: "url(/assets/images/service1.jpg)",
        height: "400px",
        borderRadius: "15px",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        position: "relative",
        display: "grid",
        "&:after": {
          background: "linear-gradient(180deg,rgba(4,12,22,0),#040c16)",
          bottom: 0,
          content: '""',
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 2,
          height: "max-content",
          mt: "auto",
          zIndex: 20,
          px: 3,
          py: 4,
        }}
      >
        <Typography
          sx={{ fontSize: "1.25rem", fontFamily: "Space Grotesk,sans-serif" }}
        >
          {title}
        </Typography>
        <Typography sx={{ opacity: 0.45 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore
        </Typography>
        <hr />
        <Rating name="read-only" value={5} readOnly />
      </Box>
    </Box>
  );
};

export default ServiceCard;
