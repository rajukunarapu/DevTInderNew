import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Link,
  Button,
  Box,
  Divider,
} from "@mui/material";
import backgroundImage from "../assets/Images/devTinder_background.webp";
import Footer from "./Footer";
import SignUp from "./SignUp";

const Home = () => {
  const boxes = [
    {
      id: 1,
      name: "Magdalena & Annie",
      content: `I had just gotten out of a relationship, and Annie had just started dating women so we were both nervous and treading lightly for a little bit! We both fell hard and fast and knew we had found our person fairly quickly.`,
    },
    {
      id: 2,
      name: "Shannon & Julian",
      content: `I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Tinder and see what happened.Without the app we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful.`,
    },
    {
      id: 3,
      name: "Courtney & Miranda",
      content: `Thanks to Tinder I have found the love of my life and we are to be married.After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn't resist swiping right after reading her final sentence... 'Looking for my super babe for life. After talking for about a week we went out on our first date and I knew there was something special about her!`,
    },
    {
      id: 4,
      name: "Rebecca",
      content: `I was also adamant the next man I'd be with and commit to, would be the man I'd spend the rest of my life with (just not married). I was very fussy and didn't expect to meet a man on Tinder. I decided to sign up anyways and just match away and see what happened.`,
    },
    {
      id: 5,
      name: "Elissa",
      content: `My college roommate and I both would stay up on Tinder, not looking for anything serious (also not looking for hookups though, just entertainment). My now husband and I matched on Tinder.`,
    },
    {
      id: 6,
      name: "Sean & Marianna",
      content: `I didn't think anything would ever come about from it, but one day I saw this stunning beauty come across the app. I Super Liked her, paying a dollar extra for the Super Like!`,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 3) % boxes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [boxes.length]);

  const [signUpVisble, setSignUpVisble] = useState(false);

  return (
    <>
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Stack
          sx={{
            height: "100vh",
            width: "100vw",
            position:'relative',
            zIndex:-1,
            backgroundAttachment: "fixed !important",
            backgroundPositionX: "50% !important",
            backgroundPositionY: "50% !important",
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat !important",
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "rgb(33, 38, 46)",
            backgroundImage: `linear-gradient(to top,transparent,transparent,transparent, rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
            filter: "brightness(40%)",
          }}
        ></Stack>

        <Stack sx={{position:'absolute', left:0, top:0, width:'100%', height:'100%', zIndex:1}} >
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
              <Stack direction={"row"} alignItems={"center"}>
                <svg
                  width="40"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.8 9.685c4.7-1.582 5.5-5.703 4.9-9.492 0-.137.12-.234.24-.176 4.5 2.13 9.56 6.797 9.56 13.828C22.5 19.235 18.22 24 12 24 5.36 24 1.5 19.371 1.5 13.845c0-3.223 2.34-6.543 4.86-7.95.12-.077.28 0 .28.138.06.722.26 2.558 1.08 3.632.02.02.06.02.08.02"
                    clipRule="evenodd"
                  />
                </svg>
                <Typography
                  variant="h3"
                  sx={{ color: "white" }}
                  fontWeight={"bolder"}
                >
                  tinder
                </Typography>
              </Stack>
              <Link
                underline="hover"
                ml={3}
                color="white"
                fontWeight={"bolder"}
                fontSize={20}
                sx={{ cursor: "pointer", ":hover": { color: "red" } }}
              >
                Products
              </Link>
              <Link
                underline="hover"
                ml={3}
                color="white"
                fontWeight={"bolder"}
                fontSize={20}
                sx={{ cursor: "pointer", ":hover": { color: "red" } }}
              >
                Learn
              </Link>
              <Link
                underline="hover"
                ml={3}
                color="white"
                fontWeight={"bolder"}
                fontSize={20}
                sx={{ cursor: "pointer", ":hover": { color: "red" } }}
              >
                Safety
              </Link>
              <Link
                underline="hover"
                ml={3}
                color="white"
                fontWeight={"bolder"}
                fontSize={20}
                sx={{ cursor: "pointer", ":hover": { color: "red" } }}
                flexGrow={1}
              >
                Download
              </Link>
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <svg
                  viewBox="0 0 12 12"
                  width="24px"
                  height="24px"
                  fill="white"
                >
                  <path
                    fill=""
                    d="M11.38,3.97c-.2-.19-.44-.34-.7-.44-.26-.1-.54-.15-.83-.15h-2.13v-1.38c0-.53-.23-1.04-.63-1.42-.41-.38-.95-.59-1.53-.59H2.16C1.59,0,1.04,.21,.63,.59c-.41,.38-.63,.89-.63,1.42v3.16c0,.26,.06,.52,.16,.77,.11,.24,.27,.46,.47,.65,.41,.38,.95,.59,1.53,.59h2.13v1.38c0,.26,.05,.52,.16,.76,.11,.24,.27,.46,.47,.65,.19,.19,.43,.34,.69,.44,.26,.1,.54,.16,.82,.15h3.41c.28,0,.56-.05,.83-.15,.26-.1,.5-.25,.7-.43,.4-.38,.63-.88,.64-1.42v-3.17c0-.26-.05-.52-.16-.77-.11-.24-.27-.46-.47-.65ZM2.16,6.27c-.32,0-.62-.12-.84-.32-.22-.21-.35-.49-.35-.78V2.01c0-.15,.03-.29,.09-.43,.06-.13,.15-.26,.26-.36,.11-.1,.24-.18,.39-.24,.15-.06,.3-.08,.46-.08h3.4c.32,0,.62,.12,.84,.32,.22,.21,.35,.49,.35,.78v3.16c0,.29-.13,.57-.35,.78-.22,.21-.53,.32-.84,.33H2.16Zm8.89,2.28c0,.15-.03,.29-.09,.42-.06,.13-.15,.26-.26,.36-.11,.1-.24,.18-.39,.24-.14,.05-.3,.08-.46,.08h-3.41c-.16,0-.31-.03-.46-.08-.14-.06-.28-.14-.39-.24-.22-.21-.35-.49-.35-.78v-1.38h.31c.36,0,.71-.08,1.02-.24,.31-.16,.58-.38,.78-.66l-1.09,2.6v.05h.88l.34-.81h1.38l.35,.81h.94l-1.62-3.84h-.64l-.19,.45c0-.11,0-.22,0-.33v-.92h2.13c.16,0,.31,.03,.46,.08,.15,.06,.28,.14,.39,.24,.11,.1,.2,.23,.26,.36,.06,.13,.09,.28,.09,.43v3.17Zm-3.33-1.09l.28-.79,.2-.64,.21,.64,.26,.79h-.95Z"
                  ></path>
                  <path
                    fill=""
                    d="M5.94,5.92l.4-.71-.13-.04c-.62-.14-1.21-.37-1.75-.68,.47-.49,.82-1.08,1.01-1.71h.8v-.69h-1.98l.15-.11-.1-.1c-.23-.22-.48-.42-.76-.59h-.06l-.08-.08-.61,.42,.15,.1c.14,.1,.27,.2,.39,.31l.06,.04H1.38v.69h.84c.22,.63,.56,1.21,1.02,1.71-.55,.33-1.16,.57-1.81,.68l-.17,.04,.4,.71h.11c.74-.2,1.45-.51,2.07-.94,.62,.39,1.29,.69,2,.9l.11,.04Zm-1.32-3.15c-.18,.45-.45,.86-.79,1.22-.35-.35-.62-.77-.79-1.22h1.59Z"
                  ></path>
                </svg>
                <Typography variant="h6" fontWeight={"bold"} color="white">
                  Language
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 5,
                  ml: 2,
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bolder",
                  textTransform: "capitalize",
                }}
                onClick={() => setSignUpVisble((prev) => !prev)}
              >
                Log in
              </Button>
            </Toolbar>
          </AppBar>
          {signUpVisble && <SignUp setSignUpVisible={setSignUpVisble} />}

          <Stack
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            my={"auto"}
          >
            <Typography variant="h1" color="white" fontWeight={"bolder"}>
              Start something epic.
            </Typography>

            <Button
              variant="contained"
              onClick={() => setSignUpVisble((prev) => !prev)}
              sx={{
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

          <Typography
            variant="subtitle2"
            color="white"
            textAlign={"end"}
            mr={3}
          >
            All photos are of models and used for illustrative purposes only
          </Typography>
        </Stack>

        {/* section-2 */}

        <Stack
          direction={"column"}
          sx={{
            p: "32px 82px 32px",
          }}
        >
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            id="box-stack"
          >
            {boxes.slice(index, index + 3).map((box) => (
              <Box
                key={box.id}
                width={393}
                height={304}
                sx={{
                  border: "1px solid lightgray",
                  borderRadius: 2,
                  p: 3,
                  boxShadow: "0 0 1px 0 gray",
                }}
              >
                <Typography variant="body1" fontWeight={"bold"} color="black">
                  {box.name}
                </Typography>

                <Divider sx={{ m: "8px 0px" }} />

                <Typography variant="subtitle2" color="gray">
                  {box.content}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
