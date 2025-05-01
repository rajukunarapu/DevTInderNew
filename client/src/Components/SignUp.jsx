import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  IconButton,
  Link,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
  ClickAwayListener,
  Alert,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import PlayStore from "../assets/Images/google_playstore.webp";
import { signUpUser } from "../services/authServices";
import AuthContext from "../context/AuthContext";
import AppStore from "../assets/Images/appstore_image.webp";

const SignUp = ({ setSignUpVisible }) => {
  // const {authCheck} = useContext(AuthContext)
  const navigate = useNavigate()
  // toggle the password icon
  const [showPassword, setShowPassword] = useState(false);
  // emailId, password variables
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  // showing alert messages
  const [isSubmitted, setIsSubmitted] = useState(false);

  // showing success or error alert after signIn
  const [ShowingDynamicAlert, setShowingDynamicAlert] = useState(false);
  // showing dynamic success value
  const [successValue, setSuccessValue] = useState("");

  // click handler for continue button
  const handlerSubmit = async (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    if (
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password)
    ) {
      setIsSubmitted(false);
      const data = await signUpUser(emailId, password);
      setShowingDynamicAlert(true);
      setSuccessValue(data.success);
      setEmailId("");
      setPassword("");
      console.log({ emailId });
      console.log({ password });
      if (data.success) {
        setTimeout(async() => {
          // showing success alert for 2 seconds
          setSignUpVisible(false);
          // await authCheck();
        }, 1000);
        
        navigate('/onboarding')
        // setTimeout(()=>{
        //   navigate('/onboarding')
        // },100)
      }
    }
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setSignUpVisible(false)}>
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
            zIndex: 100,
          }}
        >
          <IconButton
            onClick={() => setSignUpVisible(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 100,
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

          <Stack direction={"row"} sx={{ zIndex: 100 }}>
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
          </Stack>

          <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={1}
            marginTop={2}
          >
            <TextField
              type="email"
              placeholder="Enter email address..."
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
                  "&:hover fieldset": { borderColor: "  #ff6036" },
                  "& .Mui-focused fieldset": { borderColor: "blueviolet" },
                  "&:active fieldset": { borderColor: "pink" },
                  padding: 1,
                  borderRadius: 10,
                  width: "250px",
                  height: "45px",
                },
              }}
            />

            {isSubmitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) && (
              <Alert severity="error" sx={{ borderRadius: 10, width: "250px" }}>
                Please provide valid email
              </Alert>
            )}

            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
                  "&:hover fieldset": { borderColor: "  #ff6036" },
                  "& .Mui-focused fieldset": { borderColor: "blueviolet" },
                  "&:active fieldset": { borderColor: "pink" },
                  padding: 1,
                  borderRadius: 10,
                  width: "250px",
                  height: "45px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "blueviolet" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "red" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {isSubmitted &&
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password) && (
                <Alert
                  severity="error"
                  sx={{ borderRadius: 10, width: "250px" }}
                >
                  Please provide valid password
                </Alert>
              )}

            <Button
              variant="contained"
              onClick={handlerSubmit}
              sx={{
                background: "linear-gradient(to right, #fd267a, #ff6036)",
                color: "black",
                fontWeight: "bolder",
                textTransform: "capitalize",
                borderRadius: 10,
                width: "250px",
                height: "45px",
              }}
            >
              Continue
            </Button>
            {ShowingDynamicAlert && (
              <Alert
                severity={successValue ? "success" : "error"}
                sx={{ width: "250px", borderRadius: 10 }}
              >
                {successValue ? "sign up successfull" : "An error!"}
              </Alert>
            )}
          </Stack>

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
      </ClickAwayListener>
    </>
  );
};

export default SignUp;
