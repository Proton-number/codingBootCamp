import React from "react";
import "./App.css";
import BootCamp from "./Components/bootCamp";
import { information } from "./Components/Information";
import Svgs from "./Components/Svgs";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Svgs />
      <BootCamp information={information} />
    </Box>
  );
}

export default App;
