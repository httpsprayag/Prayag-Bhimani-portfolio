import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Drawer,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ projectImg, setActiveImg, setOpen }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
        <Button
          sx={{ width: "100%" }}
          onClick={() => setOpen(true)}
          setActiveImg={projectImg}
        >
          <img
            src={projectImg}
            alt="project-card"
            className="max-h-80 md:max-h-60 w-full object-cover"
          />
        </Button>
        <Typography
          sx={{
            color: "#040c16",
            fontWeight: 700,
            lineHeight: 1.2,
            padding: 2,
            fontSize: 20,
            fontFamily: "Space Grotesk,sans-serif",
          }}
        >
          Website Design
        </Typography>
        <Typography sx={{ fontsize: 14 }}>Web Design, App Design</Typography>
      </Box>
    </>
  );
};

export default ProjectCard;
