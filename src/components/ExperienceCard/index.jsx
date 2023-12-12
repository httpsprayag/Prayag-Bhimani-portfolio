import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const ExperianceCard = () => {
  return (
    <Box sx={{ py: { xs: 1, md: 1.5 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          padding: 2.5,
          borderRadius: 2,
          backgroundColor: "rgba(7,136,255,.1)",
        }}
      >
        <Box
          sx={{
            // display: "grid",
            padding: 1.5,
            // placeItems: "start",
            borderRadius: 2,
            backgroundColor: "#0788ff",
            minWidth: { xs: "100%", md: "293px" },
            minHeight: { xs: "100%", md: "210px", lg: "173px" },
            // gap: 1.25,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", mb: 1 }}>
            Front-end Developer
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
            WELAB | REMOTE
          </Typography>
          <Typography sx={{ mb: 2 }}>JAN 2019 - PRESENT</Typography>
          <Button
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "12px",
              color: "#000",
              fontSize: 12,
              px: 1.5,
              fontFamily: "Space Grotesk,sans-serif",

              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            FULL TIME
          </Button>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 32, fontWeight: 700 }}>
            About Company
          </Typography>
          <Typography
            sx={{
              marginTop: 1.25,
              fontSize: 16,
              fontWeight: 400,
              opacity: 0.8,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperianceCard;
