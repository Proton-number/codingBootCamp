import React from "react";
import patternQuotes from "/src/images/pattern-quotes.svg";
import patternBg from "/src/images/pattern-bg.svg";
import patternCurve from "/src/images/pattern-curve.svg";
import { Box } from "@mui/material";

function Svgs() {
  return (
    <Box sx={{ position: "relative", bottom: "-250px" }}>
      <Box
        sx={{
          position: "relative",
          padding: "20px",
          width: { xs: "100%", sm: "200px" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: { xs: "48px", sm: "-320px", lg: "-140px" },
            left: { xs: "110px", sm: "80px", lg: "50px" },
            width: { xs: "70px", sm: "300px", lg: "150px" },
            height: { xs: "80px", sm: "100px", lg: "150px" },
            backgroundImage: `url(${patternQuotes})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          },
        }}
      />

      <Box
        sx={{
          position: "relative",
          padding: "20px",
          width: { xs: "100%", sm: "300px" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: { xs: "-300px", sm: "-250px", lg: "-180px" },
            left: { xs: 0, sm: "200px", lg: "550px" },
            width: { xs: "330px", sm: "400px", lg: "600px" },
            height: "500px",
            backgroundImage: `url(${patternBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          },
        }}
      />

      <Box
        sx={{
          position: "relative",
          padding: "20px",
          width: "100%",
          "&::before": {
            content: '""',
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            height: "100px",
            backgroundImage: `url(${patternCurve})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: "-1",
          },
        }}
      />
    </Box>
  );
}

export default Svgs;
