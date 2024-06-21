import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";

function Button({ information, currentIndex, setCurrentIndex }) {
  const backArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forwardArrow = () => {
    if (currentIndex < information.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.22, delay: 0.099 }}
        spacing={{ xs: 0.5, lg: 2 }}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: { lg: "8%" },
          padding: "5px",
          borderRadius: "25px",
          position: "absolute",
          bottom: {
            xs: currentIndex === 0 ? "380px" : "410px",
            sm: "54px",
            lg: "40px",
          },
          left: { xs: "90px", sm: "390px", lg: "704px" },
        }}
      >
        <IconButton onClick={backArrow} sx={{ color: "hsl(238, 19%, 60%)" }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton onClick={forwardArrow} sx={{ color: "hsl(238, 19%, 60%)" }}>
          {" "}
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Button;
