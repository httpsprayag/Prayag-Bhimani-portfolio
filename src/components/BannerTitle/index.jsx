import React from "react";
import { Button } from "@mui/material";

const BannerTitle = ({ children, sx }) => {
  return (
    <Button
      // variant="contained"
      sx={{
        cursor: "text",
        backgroundColor: "#07325C !important",
        color: "#C1CDD8",
        px: 2,
        py: 1,
        lineHeight: "20px",
        fontFamily: "Space Grotesk,sans-serif",
        width: "max-content",
        "&:hover": {
          backgroundColor: "#06355c",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default BannerTitle;
