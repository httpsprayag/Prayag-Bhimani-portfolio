import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <Box
      sx={{
        borderRadius: 6,
        py: 10,
      }}
    >
      <Container>
        <Box
          sx={{
            border: "1px solid rgba(7,136,255,.2)",
            background: "rgba(7,136,255,.1)",
          }}
        >
          <Grid
            container
            sx={{
              background: "linear-gradient(150deg,#051A2F,#072B4D)",
              position: "relative",
            }}
          >
            <Grid xs={0} md={4}></Grid>
            <Grid xs={12} md={8} sx={{ padding: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: 24, md: 32, lg: 40 },
                  fontFamily: "Space Grotesk,sans-serif",
                }}
              >
                Let’s Discuss Your Project
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  opacity: 0.9,
                  fontFamily: "Space Grotesk,sans-serif",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, reprehenderit.
              </Typography>
            </Grid>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                maxWidth: { md: 220, lg: 250 },
                top: { md: 50, lg: 60 },
                left: { md: 50, lg: 60 },
              }}
            >
              <img
                src="/assets/images/contact.png"
                className="object-contain"
                alt="contact-us"
              />
            </Box>
          </Grid>
          <Grid
            container
            sx={{
              padding: { xs: 5, md: 8 },
              placeItems: "flex-end",
              background: "#06345D",
            }}
          >
            <Grid
              item
              md={4}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 12,
                  opacity: 0.75,
                  letterSpacing: 2,
                }}
              >
                WRITE AN E-MAIL
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                }}
              >
                sample@domain.com
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 12,
                  opacity: 0.75,
                  letterSpacing: 2,
                }}
              >
                WRITE AN E-MAIL
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                }}
              >
                +044 9696 9696 3636
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  pt: 2.25,
                  pb: 1,
                }}
              >
                <Link href={"/"} className="scroll-smooth">
                  <Image
                    height={40}
                    width={40}
                    src={"/assets/icons/instagram2.svg"}
                  />
                </Link>
                <Link href={"/"} className="scroll-smooth">
                  <Image
                    height={40}
                    width={40}
                    src={"/assets/icons/facebook.svg"}
                    className="w-10 h-10 box-content"
                  />
                </Link>
                <Link href={"/"} className="scroll-smooth">
                  <Image
                    height={40}
                    width={40}
                    src={"/assets/icons/linkedin.svg"}
                    className="w-10 h-10 box-content"
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <form>
                <Grid item container spacing={2} rowSpacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography>YOUR NAME</Typography>
                    <TextField
                      name="name"
                      required
                      variant="filled"
                      label="Name"
                      color="info"
                      sx={{
                        mt: 1,
                        border: "",
                        border: "1px solid hsla(0,0%,100%,.15)",
                        width: "100%",
                        color: "rgba(255,255,255,0.75)",
                        "& input": {
                          background: "hsla(0,0%,100%,.05)",
                          width: "100%",
                          color: "#ddd",
                        },
                        "& label": {
                          color: "#fff",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>EMAIL</Typography>
                    <TextField
                      name="email"
                      required
                      variant="filled"
                      label="Name"
                      color="info"
                      sx={{
                        mt: 1,
                        border: "",
                        background: "hsla(0,0%,100%,.05)",
                        border: "1px solid hsla(0,0%,100%,.15)",
                        width: "100%",
                        color: "rgba(255,255,255,0.75)",
                        "& input": {
                          // background: "hsla(0,0%,100%,.05)",
                          width: "100%",
                          color: "#ddd",
                        },
                        "& label": {
                          color: "#fff",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>YOUR NAME</Typography>
                    <TextField
                      name="name"
                      required
                      variant="filled"
                      label="Name"
                      color="info"
                      sx={{
                        mt: 1,
                        border: "",
                        background: "hsla(0,0%,100%,.05)",
                        border: "1px solid hsla(0,0%,100%,.15)",
                        width: "100%",
                        color: "rgba(255,255,255,0.75)",
                        "& input": {
                          // background: "hsla(0,0%,100%,.05)",
                          width: "100%",
                          color: "#ddd",
                        },
                        "& label": {
                          color: "#fff",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>YOUR MESSAGE</Typography>
                    <TextareaAutosize
                      minRows={4}
                      name="message"
                      required
                      placeholder="Your Message"
                      style={{
                        marginTop: 16,
                        width: "100%",
                        color: "#ddd",
                        backgroundColor: "hsla(0,0%,100%,.05)",
                        border: "1px solid hsla(0,0%,100%,.15)",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "8px",
                        "& textarea": {
                          background: "red",
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="bg-[#0789FE]"
                      sx={{
                        mt: 2,
                        py: { xs: 0.5, md: 1.5 },
                        px: { xs: 1.75, md: 3 },
                        borderRadius: 8,
                        fontSize: 20,
                        letterSpacing: 2,
                        border: "1px solid transparent",
                        fontFamily: "Bebas Neue, sans-serif",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "#050C16",
                          borderColor: "#fff",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
