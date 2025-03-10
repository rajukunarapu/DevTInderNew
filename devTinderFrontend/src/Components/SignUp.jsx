import React from "react";
import { useState } from "react";
import {
  IconButton,
  Link,
  Stack,
  Typography,
  Button,
  SvgIcon,
} from "@mui/material";
import AppStore from "../assets/Images/appstore_image.webp";
import PlayStore from "../assets/Images/google_playstore.webp";
import { Call, Close, Facebook, Google } from "@mui/icons-material";
import SignUpMobilePopUp from "./SignUpMobilePopUp";

const SignUp = ({ setSignUpVisible }) => {
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const [mobilePopUp, setMobilePopUp] = useState(false);
  return (
    <>
      {mobilePopUp ? (
        <SignUpMobilePopUp
          setMobilePopUp={setMobilePopUp}
          setSignUpVisible={setSignUpVisible}
        />
      ) : (
        <Stack
          direction="column"
          alignItems={"center"}
          sx={{
            padding: "40px 44px",
            width: "440px",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid light",
            borderRadius: 3,
            backgroundColor: "white",
            zIndex: 10,
          }}
        >
          <IconButton
            onClick={() => setSignUpVisible(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 11,
            }}
          >
            <Close sx={{ width: 30, height: 30 }} />
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

          <Typography variant="h4" mt={3} color="black" fontWeight={"bold"}>
            Get Started
          </Typography>

          <Typography variant="subtitle2" color="black" mt={3}>
            By tapping Log In or Continue, you aggre to our{" "}
            <span color="blue">
              <Link
                fontWeight={"bold"}
                href="https://policies.tinder.com/terms/intl/en/?lang=en"
              >
                Terms.
              </Link>
            </span>{" "}
            Learn how we process your data in our{" "}
            <span color="blue">
              <Link
                fontWeight={"bold"}
                href="https://policies.tinder.com/privacy/intl/en/?lang=en"
              >
                Privacy Policy,
              </Link>
            </span>{" "}
            and{" "}
            <span color="blue">
              <Link
                fontWeight={"bold"}
                href="https://policies.tinder.com/cookie-policy/intl/en/?lang=en"
              >
                Cookie Policy.
              </Link>
            </span>{" "}
          </Typography>

          <Button
            startIcon={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="LgbsSe-Bz112c"
                width="24" 
                height="24"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            }
            sx={{
              width: "90%",
              mt: 1,
              borderRadius: 10,
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "rgb(232, 233, 235)",
              color: "black",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                boxShadow: "none",
              },
              boxShadow: "none",
            }}
            variant="contained"
          >
            Continue with Google
          </Button>

          {moreOptionsVisible ? (
            <>
              <Button
                variant="contained"
                color="black"
                onClick={() => setMobilePopUp(true)}
                startIcon={<Call sx={{ color: "red" }} />}
                sx={{
                  width: "90%",
                  mt: 2,
                  borderRadius: 10,
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "rgb(232, 233, 235)",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                    boxShadow: "none",
                  },
                  boxShadow: "none",
                }}
              >
                Log in with phone number
              </Button>

              <Link
                sx={{
                  mt: 2,
                  color: "blue",
                  fontWeight: "bold",
                  fontSize: "15px",
                  cursor: "pointer",
                  ":hover": {
                    textDecoration: "none",
                  },
                }}
              >
                Trouble Loggin in?
              </Link>
            </>
          ) : (
            <Link
              onClick={() => setMoreOptionsVisible(true)}
              sx={{
                mt: 2,
                color: "gray",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              More Options
            </Link>
          )}

          <Typography variant="body1" mt={3} fontWeight={"bold"} color="black">
            Get the app!
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link
              underline="none"
              sx={{ cursor: "pointer" }}
              href="https://apps.apple.com/us/app/tinder-dating-app-chat-date/id547702041"
            >
              <img
                src={AppStore}
                alt="AppStore"
                width={"143px"}
                height={"48px"}
              />
            </Link>
            <Link
              underline="none"
              sx={{ cursor: "pointer" }}
              href="https://play.google.com/store/apps/details?id=com.tinder&referrer=utm_source%3Dwebsite&utm_medium=cta&utm_campaign=website_home&pli=1"
            >
              <img
                src={PlayStore}
                alt="playstore"
                width={"175px"}
                height={"70px"}
              />
            </Link>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default SignUp;
