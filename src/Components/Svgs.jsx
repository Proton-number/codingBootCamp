import React from "react";
import patternQuotes from "/public/pattern-quotes.svg";
import patternBg from "/public/pattern-bg.svg";
import patternCurve from "/public/pattern-curve.svg";
import { Box } from "@mui/material";

function Svgs() {
  return (
    <Box sx={{ position: "relative", bottom: "-250px" }}>
      <Box
        id="box1"
        sx={{
          position: "relative",
          padding: "20px",
          width: { xs: "100%", sm: "200px" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: { xs: "60px", sm: "-220px", lg: "-140px" },
            left: { xs: "110px", sm: "40px", lg: "50px" },
            width: { xs: "70px", sm: "300px", lg: "150px" },
            height: { xs: "80px", sm: "100px", lg: "150px" },
            backgroundImage: `url(${patternQuotes})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          },
        }}
      />

      <Box
        id="box2"
        sx={{
          position: "relative",
          padding: "20px",
          width: { xs: "100%", sm: "300px" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: { xs: "-280px", sm: "-280px", lg: "-180px" },
            left: { xs: 0, sm: "284px", lg: "550px" },
            width: { xs: "330px", sm: "400px", lg: "600px" },
            height: { xs: "300px", sm: "500px" },
            backgroundImage: `url(${patternBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          },
        }}
      />

      <Box
        id="box3"
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
