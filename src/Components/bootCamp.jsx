import { Box, Typography, Stack } from "@mui/material";
import React from "react";

function BootCamp({ information }) {
  return (
    <Box>
      {information.map((info, index) => (
        <Stack
          spacing={{ xs: 4, lg: 5 }}
          direction={{
            xs: "column-reverse",
            sm: "row",
          }}
          key={index}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: { xs: "-85px", sm: "-80px", lg: -60 },
            left: { sm: "30px", lg: 0 },
          }}
        >
          <Stack
            spacing={1}
            sx={{
              width: { xs: "280px", sm: "340px", lg: "600px" },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "22px",
                  sm: "23px",
                  lg: "32px",
                },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              "{info.testimony}"
            </Typography>
            <Stack
              direction={{ sm: "row" }}
              spacing={2}
              sx={{
                alignItems: { xs: "center", sm: "initial" },
              }}
            >
              <Typography>
                {" "}
                <b>{info.name}</b>
              </Typography>
              <Typography sx={{ opacity: "50%" }}>
                {" "}
                <b>{info.role}</b>
              </Typography>
            </Stack>
          </Stack>
          <>
            <Box
              component="img"
              src={info.img}
              sx={{
                width: { xs: "240px", sm: "320px", lg: "500px" },
              }}
            />
          </>
        </Stack>
      ))}
    </Box>
  );
}

export default BootCamp;
