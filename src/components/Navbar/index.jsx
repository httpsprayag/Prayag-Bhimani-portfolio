"use client";
import { NavItems } from "@/constants";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import MobileNav from "../MobileNav";

const Navbar = ({ isMobileNavOpen, setMobileNavOpen }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (global?.window.scrollY >= 180) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    global?.window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <MobileNav
        open={isMobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          py: 4,
          zIndex: 100,
          background: scrolling
            ? "rgb(0, 0, 0, 0.85)"
            : "linear-gradient(to left,#050C16,#072238)",
          transition: "background 1s ease-in-out",
          backdropFilter: scrolling && "blur(1px)",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                fontFamily: "Bebas Neue, sans-serif",
              }}
            >
              PRAYAG
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: { xs: 1.5, md: 2.7, lg: 4 },
                flex: 1,
                justifyContent: "flex-end",
                px: 3,
              }}
            >
              {NavItems?.map((item) => (
                <Link
                  component={"a"}
                  key={item?.href}
                  href={item?.href}
                  sx={{
                    color: "#fff",
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
                    "&:after": {
                      position: "absolute",
                      padding: 0,
                      content: '""',
                      backgroundColor: "white",
                      width: "100%",
                      height: 2,
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      opacity: 0,
                      transition: "opacity .2s ease",
                    },
                    "&:hover:after": {
                      opacity: 1,
                    },
                  }}
                >
                  {item?.name}
                </Link>
              ))}
            </Box>
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
              Lets Talk
            </Button>
            <MenuIcon
              onClick={() => setMobileNavOpen(true)}
              sx={{
                color: "#fff",
                fontSize: 24,
                display: { xs: "flex", md: "none" },
                cursor: "pointer",
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
