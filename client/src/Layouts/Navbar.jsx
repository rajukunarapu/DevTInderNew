import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Link,
} from "@mui/material";
import SignIn from "../Components/SignIn";
import TinderLogo from "../Components/TinderLogo";
import Language from "../Components/Language";
import LoginButton from "../Components/LoginButton";

const Navbar = () => {

  const [signInVisble, setSignInVisble] = useState(false);

  const navigationLinks = [
    { id: 1, name: "Products" },
    { id: 2, name: "Learn" },
    { id: 3, name: "Safety" },
    { id: 4, name: "Download", flexGrow: 1 },
  ];

  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 100,
        }}
      >
        <AppBar
          position="static"
          sx={{
            height: "82px",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{ minHeight: "50px", height: "50px !important", my: "auto" }}
          >
            <TinderLogo fill={"white"} color={"white"} />

            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  underline="hover"
                  ml={3}
                  color="white"
                  fontWeight={"bolder"}
                  fontSize={20}
                  sx={{ cursor: "pointer", ":hover": { color: "red" } }}
                  flexGrow={item.flexGrow}
                >
                  {item.name}
                </Link>
              );
            })}

            <Language />
            <LoginButton setSignInVisble={setSignInVisble} />

          </Toolbar>
        </AppBar>

      </Stack>

      {signInVisble && <SignIn setSignInVisible={setSignInVisble} />}
      
    </>
  );
};

export default Navbar;
