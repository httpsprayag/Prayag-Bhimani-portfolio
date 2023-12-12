import React, { useState } from "react";
import BannerTitle from "@/components/BannerTitle";
import ProjectCard from "@/components/ProjectCard";
import { Backdrop, Box, Container, Typography } from "@mui/material";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projectsData } from "@/constants";
import Image from "next/image";
import { Close } from "@mui/icons-material";

const WorkPage = () => {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(projectsData[0].projectImg);
  return (
    <Box
      sx={{ py: 10, background: "rgba(7,136,255,0.1)", position: "relative" }}
    >
      <Container>
        <BannerTitle sx={{ mt: 2 }}>MY WORK</BannerTitle>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 34, lg: 40 },
            fontFamily: "Space Grotesk,sans-serif",
          }}
        >
          RECENT PROJECT
        </Typography>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
          autoplay={true}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          className="py-2 md:py-8"
        >
          {projectsData?.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                setOpen={setOpen}
                setActiveImg={setActiveImg}
                projectImg={project?.projectImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={() => setOpen(false)}
      >
        {/* <CircularProgress color="inherit" /> */}
        <img src={activeImg} className="w-1/2 h-1/2 object-contain" />
        <Close
          sx={{
            position: "absolute",
            top: 0,
            right: "0",
            margin: "4px",
            color: "#fff",
            fontSize: "32px",
          }}
        />
      </Backdrop>
    </Box>
  );
};

export default WorkPage;
