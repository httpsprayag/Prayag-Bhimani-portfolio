import { NavItems } from "@/constants";
import { Box, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const MobileNav = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      closeAfterTransition={true}
    >
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
        {NavItems?.map((item) => (
          <Link
            component={"a"}
            key={item?.href}
            href={item?.href}
            onClick={onClose}
            sx={{
              textDecoration: "none",
              fontSize: { xs: 12, md: 16, lg: 20 },
              fontWeight: 300,
              letterSpacing: 1,
              padding: "0 !important",
              width: "max-content",
              position: "relative",
              textTransform: "uppercase",
              transition: " all .4s ease",
              fontFamily: "Bebas Neue, sans-serif",
            }}
          >
            <Typography sx={{ fontSize: 22, color: "#ffd" }}>
              {item?.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Drawer>
  );
};

export default MobileNav;
