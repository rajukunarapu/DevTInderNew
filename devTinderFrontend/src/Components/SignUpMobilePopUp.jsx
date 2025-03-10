import React from "react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const SignUpMobilePopUp = ({ setMobilePopUp, setSignUpVisible }) => {

  const [mobileNumber, setMobileNumber] = useState("");
  //closing the mobilepopup box and signUp box
  const handleClose = () => {
    setMobilePopUp(false);
    setSignUpVisible(false);
  };

  const handleButton = () => {
    if (mobileNumber.length == 10) {
        console.log({"mobileNumber": mobileNumber})
        handleClose()
    }
  };

  return (
    <>
      <Stack
        direction={"column"}
        alignItems={"center"}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 2,
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          border: "1px solid light",
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10, color: "black" }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.8 9.685c4.7-1.582 5.5-5.703 4.9-9.492 0-.137.12-.234.24-.176 4.5 2.13 9.56 6.797 9.56 13.828C22.5 19.235 18.22 24 12 24 5.36 24 1.5 19.371 1.5 13.845c0-3.223 2.34-6.543 4.86-7.95.12-.077.28 0 .28.138.06.722.26 2.558 1.08 3.632.02.02.06.02.08.02"
            clipRule="evenodd"
          />
        </svg>

        <Typography variant="h5" color="black" fontWeight={"bold"} mt={2}>
          Can we get your number?
        </Typography>

        <Grid2
          container
          mt={2}
          direction={"row"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Grid2 size={4}>
            <Typography variant="body1">Country</Typography>
            <TextField
              placeholder="IN +91"
              size="small"
              sx={{ width: "80%", "& .MuiInputBase-root": { borderRadius: 2 } }}
            />
          </Grid2>
          <Grid2 size={8}>
            <Typography variant="body1">Phone Number</Typography>
            <TextField
              type="number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              size="small"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": { borderRadius: 2 },
              }}
            />
          </Grid2>
        </Grid2>

        <Typography variant="body2" color="gray" mt={2}>
          We'll text you a code to verify you're really you. Message and data
          rates may apply.{" "}
          <span>
            <Link
              href="https://www.help.tinder.com/hc/en-us/articles/360005147211-I-need-to-update-my-phone-number?utm_source=web"
              sx={{ color: "blue" }}
            >
              what happens if your number changes?
            </Link>
          </span>
        </Typography>

        <Button
          variant="contained"
          onClick={handleButton}
          sx={{
            width: "70%",
            mt: 2,
            backgroundColor: "rgb(232, 233, 235)",
            color: "gray",
            fontWeight: "bold",
            fontSize: "18px",
            borderRadius: 10,
            textTransform: "capitalize",
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
            },
          }}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default SignUpMobilePopUp;
