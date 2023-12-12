"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutPage from "@/pages/About";
import HeroPage from "@/pages/Hero";
import { sliderImages } from "@/constants";
import WorkPage from "@/pages/Work";
import ServicePage from "@/pages/Service";
import ExperiencePage from "@/pages/Experiance";
import ContactPage from "@/pages/Contact";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg,#07233b 1.67%,#041d34 39.95%,#04192d 58.24%,#040e18 80.28%,#050c16 101.48%)",
        }}
      >
        <HeroPage />
        <Box
          sx={{
            background: "linear-gradient(to left,#041B2F,#062C4D)",
            height: "100%",
            py: { xs: 4, md: 7 },
          }}
        >
          <Container>
            <Swiper
              spaceBetween={10}
              autoplay={2400}
              breakpoints={{
                0: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
                },
                1040: {
                  slidesPerView: 7,
                },
              }}
            >
              {sliderImages?.map((img, index) => (
                <SwiperSlide key={index} className="">
                  <img
                    src={img}
                    alt={img}
                    className="object-contain w-10 h-10 md:w-24 md:h-24"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>
        <AboutPage />
        <WorkPage />
        <ServicePage />
        <ExperiencePage />
        <ContactPage />
      </Box>
    </>
  );
}

// {linear-gradient(to left,#050C16,#072238)}
