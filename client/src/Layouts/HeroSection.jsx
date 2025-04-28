import { Stack, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Images/devTinder_background.webp"
import SignUp from "../Components/SignUp";

const HeroSection = () => {
  const [signUpVisble, setSignUpVisble] = useState(false);
  // const navigate = useNavigate()

  return (
    <>
      <Box sx={{position:'relative'}} >
        <Stack
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundAttachment: "fixed !important",
            backgroundPositionX: "50% !important",
            backgroundPositionY: "50% !important",
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat !important",
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "rgb(33, 38, 46)",
            backgroundImage: `linear-gradient(to top,transparent,transparent,transparent, rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
            filter: "brightness(70%)",
          }}
        ></Stack>

        <Stack
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          sx={{ transform: "translate(-50%,-50%)", zIndex: 100 }}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h1" color="white" fontWeight={"bolder"}>
            Start something.
          </Typography>

          <Button
            variant="contained"
            onClick={() => setSignUpVisble((prev) => !prev)}
            sx={{
              marginTop: 3,
              textTransform: "capitalize",
              borderRadius: 10,
              background: "linear-gradient(to top right, #fd267a, #ff6036)",
              width: "186px",
              height: "50px",
              fontWeight: "bold",
              fontSize: "19px",
            }}
          >
            Create account
          </Button>
        </Stack>

        {signUpVisble && <SignUp setSignUpVisible={setSignUpVisble} />}

        <Typography variant="subtitle2" color="white" textAlign={"end"} mr={3}>
          All photos are of models and used for illustrative purposes only
        </Typography>
      </Box>
    </>
  );
};

export default HeroSection;
