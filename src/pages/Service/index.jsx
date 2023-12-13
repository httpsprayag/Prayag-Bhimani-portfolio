import BannerTitle from "@/components/BannerTitle";
import ServiceCard from "@/components/ServiceCard";
import { serviceData } from "@/constants";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ServicePage = () => {
  return (
    <Box
      component={"div"}
      id="services"
      sx={{
        baackground:
          "linear-gradient(90deg,#07233b 1.67%,#041d34 39.95%,#04192d 58.24%,#040e18 80.28%,#050c16 101.48%)",
        py: 10,
      }}
    >
      <Container>
        <BannerTitle>SERVICES</BannerTitle>
        <Typography sx={{ fontSize: { xs: 24, md: 32, lg: 40 }, mt: 1 }}>
          DESIGN <span className="text-[#0688FE]">SERVICES</span> I AM PROVIDING
        </Typography>
        <Box
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          sx={{ display: "grid", mt: 3 }}
        >
          {serviceData?.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              review={service?.review}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicePage;
