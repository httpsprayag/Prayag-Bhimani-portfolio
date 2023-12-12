import BannerTitle from "@/components/BannerTitle";
import ExperianceCard from "@/components/ExperienceCard";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ExperiencePage = () => {
  return (
    <Box sx={{ background: "rgba(7,136,255,.1)", py: { xs: 4, md: 6 } }}>
      <Container>
        <Box sx={{ py: 1.5 }}>
          <BannerTitle>EXPERIENCE</BannerTitle>
          <Typography
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: { xs: 24, md: 32, lg: 40 },
              mb: { xs: 3, md: 4 },
            }}
          >
            MY WORK <span className="text-[#0688FE]"> EXPERIENCE</span>
          </Typography>
          {[1, 2, 3].map((i, idx) => (
            <ExperianceCard key={idx} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperiencePage;
