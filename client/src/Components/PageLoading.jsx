import React from "react";
import { Box, LinearProgress } from "@mui/material";
import TinderLogo from "./TinderLogo";

const PageLoading = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: "50%",
          top: "30%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <TinderLogo fill={"red"} color={"black"} />
        <LinearProgress sx={{ mt: "10px", borderRadius: 10 }} color="success" />
      </Box>
    </>
  );
};

export default PageLoading;
