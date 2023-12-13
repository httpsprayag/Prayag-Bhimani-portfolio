import BannerTitle from "@/components/BannerTitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroPage = () => {
  return (
    <Box
      component={"div"}
      sx={{
        height: { md: "100%" },
        py: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: { md: "100%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: { xs: 2, md: 4 },
            }}
          >
            <BannerTitle>PRAYAG BHIMANI</BannerTitle>
            <Typography
              sx={{
                fontSize: { xs: 29, md: 46, lg: 54 },
                fontWeight: 700,
                fontFamily: "Bebas Neue, sans-serif",
                letterSpacing: 4,
              }}
            >
              HEY! I'M PRAYAG
            </Typography>
            <TypeAnimation
              sequence={["I'M DEVELOPER", 2000, "I'M DESIGNER", 2500]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: 32,
                color: "#4A9CE9",
                display: "inline-block",
                fontWeight: 700,
                letterSpacing: 3,
                fontFamily: "bebas Neue, sans-serif",
              }}
              repeat={Infinity}
            />
            <Typography
              sx={{
                fontSize: { xs: 16, md: 24 },
                fontFamily: "Bebas Neue, sans-serif",
                color: "#fff",
              }}
            >
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </Typography>
            <Box
              sx={{
                display: { md: "flex" },
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                className="bg-[#0789FE]"
                sx={{
                  display: { xs: "none", md: "flex" },
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: { xs: 2.5, md: 0 },
                }}
              >
                <Link href={"/"} className="scroll-smooth">
                  <Image
                    alt="instagram"
                    height={40}
                    width={40}
                    src={"/assets/icons/instagram2.svg"}
                  />
                </Link>
                <Link href={"/"} className="scroll-smooth">
                  <Image
                    alt="facebook"
                    height={40}
                    width={40}
                    src={"/assets/icons/facebook.svg"}
                    className="w-10 h-10 box-content"
                  />
                </Link>
                <Link href={"/"} className="scroll-smooth">
                  <Image
                    alt="linkedin"
                    height={40}
                    width={40}
                    src={"/assets/icons/linkedin.svg"}
                    className="w-10 h-10 box-content"
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: { xs: "450px", md: "100%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/images/hero-banner.png"
              className="object-cover md:object-contain max-h-[375px] max-w-[375px] md:max-h-[520px] md:max-w-[475px] md:h-[675px] md:w-[625px]"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroPage;
