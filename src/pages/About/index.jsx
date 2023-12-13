import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import { sliderImages } from "@/constants";
import BannerTitle from "@/components/BannerTitle";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Box
        component={"div"}
        id="about"
        sx={{
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg,#07233b 1.67%,#041d34 39.95%,#04192d 58.24%,#040e18 80.28%,#050c16 101.48%)",
          py: { xs: 7, sm: 10, md: 12 },
        }}
      >
        <Container>
          {/* <BannerTitle sx={{ mt: 8 }}>MY WORK</BannerTitle> */}
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: { md: 2 }, position: "relative" }}
            >
              <img
                src="/assets/images/about-banner.png"
                className="relative z-20 md:max-w-[475px] md:max-h-[500px] mx-auto h-full lg:max-w-[500px] lg:max-h-[575px] object-contain"
                alt="aboutimg"
              />
              <img
                src="/assets/images/effect-2.svg"
                alt="animation"
                className="md:w-40 md:h-40 hidden lg:block absolute z-10 -bottom-10 -left-10 animate-spin duration-1000 ease-linear"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                placeItems: "start",
                px: { md: 3 },
                display: "grid",
                placeContent: "center",
                mt: { xs: 4, md: 0 },
              }}
            >
              <BannerTitle>ABOUT US</BannerTitle>
              <Typography
                sx={{
                  fontSize: { xs: 24, md: 32, lg: 40 },
                  fontWeight: 600,
                  mt: 1.25,
                }}
              >
                I AM AVAILABLE FOR{" "}
                <span className="text-[#0787FD]">UI UX DESIGN </span>PROJECTS
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 100,
                  my: 2,
                  fontFamily: "Space Grotesk,sans-serif",
                }}
              >
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "start",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    flexDirection: "column",
                    alignItems: "start",
                    padding: { xs: 1.5, md: 2.5 },
                    border: "1px solid hsla(0,0%,100%,.15)",
                    borderRadius: 1.25,
                    background: "hsla(0,0%,100%,.05)",
                    width: "max-content",
                  }}
                >
                  <Typography>280+</Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontFamily: "Space Grotesk,sans-serif",
                      fontSize: 10,
                    }}
                  >
                    Google Review
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",

                    flexDirection: "column",
                    alignItems: "start",
                    padding: { xs: 1.5, md: 2.5 },
                    border: "1px solid hsla(0,0%,100%,.15)",
                    borderRadius: 1.25,
                    background: "hsla(0,0%,100%,.05)",
                    width: "max-content",
                  }}
                >
                  <Typography>15+</Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontFamily: "Space Grotesk,sans-serif",
                      fontSize: 10,
                    }}
                  >
                    Years Experience
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",

                    flexDirection: "column",
                    alignItems: "start",
                    padding: { xs: 1.5, md: 2.5 },
                    border: "1px solid hsla(0,0%,100%,.15)",
                    borderRadius: 1.25,
                    background: "hsla(0,0%,100%,.05)",
                    width: "max-content",
                  }}
                >
                  <Typography>280+</Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontFamily: "Space Grotesk,sans-serif",
                      fontSize: 10,
                    }}
                  >
                    Awward Winning
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="primary"
                className="bg-[#0789FE]"
                sx={{
                  display: { xs: "none", md: "flex" },
                  mt: { xs: 2, md: 4 },
                  py: { xs: 0.5, md: 1.5 },
                  px: { xs: 1.75, md: 3 },
                  borderRadius: 8,
                  fontSize: 20,
                  letterSpacing: 2,
                  border: "1px solid transparent",
                  fontFamily: "Bebas Neue, sans-serif",
                  "&:hover": {
                    backgroundColor: "#050C16",
                    borderColor: "#fff",
                  },
                }}
              >
                Get In Touch
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
