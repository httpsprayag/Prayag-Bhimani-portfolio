import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ChevronRightRounded } from "@mui/icons-material";

const ProjectCard = ({ projectImg, setActiveImg, setOpen, title, link }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
        <Button
          sx={{ width: "100%" }}
          // onClick={() => {
          //   setOpen(true);
          //   setActiveImg(projectImg);
          // }}
        >
          <img
            src={projectImg}
            alt="project-card"
            className="w-full h-64 md:max-w-[400px] md:max-h-[400px] object-cover"
          />
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#040c16",
                fontWeight: 700,
                lineHeight: 1.2,
                p: 2,
                fontSize: 20,
                fontFamily: "Space Grotesk,sans-serif",
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ fontsize: 14, px: 2, pb: 4, color: "#040c16" }}>
              Web Design, App Design
            </Typography>
          </Box>
          <Link
            href={`${link}`}
            target="_blank"
            className="mr-2 mt-2 rounded-full bg-[#0789FE]"
          >
            <ChevronRightRounded
              sx={{
                color: "#fff",
                fontSize: 24,
                width: 40,
                height: 40,
                color: "#fff",
              }}
            />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
