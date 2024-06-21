import React, { useState } from "react";
import "./App.css";
import BootCamp from "./Components/bootCamp";
import { information } from "./Components/Information";
import Svgs from "./Components/Svgs";
import { Box } from "@mui/material";
import Button from "./Components/Button";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Box>
      <Svgs />

      <BootCamp information={information} currentIndex={currentIndex} />

      <Button
        information={information}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Box>
  );
}

export default App;
