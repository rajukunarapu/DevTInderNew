import React from "react";
import { Stack, Box, Typography, Link, Divider } from "@mui/material";
import AppStore from "../assets/Images/appstore_image.webp";
import PlayStore from "../assets/Images/google_playstore.webp";
import {
  Instagram,
  YouTube,
  Twitter,
  Facebook,
  MusicNote,
} from "@mui/icons-material";

const Footer = () => {
  // box-content
  const boxes = [
    {
      id: 1,
      name: "1. Magdalena & Annie",
      content: `I had just gotten out of a relationship, and Annie had just started dating women so we were both nervous and treading lightly for a little bit! We both fell hard and fast and knew we had found our person fairly quickly.`,
    },
    {
      id: 2,
      name: "2. Shannon & Julian",
      content: `I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Tinder and see what happened.Without the app we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful.`,
    },
    {
      id: 3,
      name: "3. Courtney & Miranda",
      content: `Thanks to Tinder I have found the love of my life and we are to be married.After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn't resist swiping right after reading her final sentence... 'Looking for my super babe for life. After talking for about a week we went out on our first date and I knew there was something special about her!`,
    },
    {
      id: 4,
      name: "4. Rebecca",
      content: `I was also adamant the next man I'd be with and commit to, would be the man I'd spend the rest of my life with (just not married). I was very fussy and didn't expect to meet a man on Tinder. I decided to sign up anyways and just match away and see what happened.`,
    },
    {
      id: 5,
      name: "5. Elissa",
      content: `My college roommate and I both would stay up on Tinder, not looking for anything serious (also not looking for hookups though, just entertainment). My now husband and I matched on Tinder.`,
    },
    {
      id: 6,
      name: "6. Sean & Marianna",
      content: `I didn't think anything would ever come about from it, but one day I saw this stunning beauty come across the app. I Super Liked her, paying a dollar extra for the Super Like!`,
    },
    {
      id: 7,
      name: "7. Courtney & Miranda",
      content: `Thanks to Tinder I have found the love of my life and we are to be married.After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn't resist swiping right after reading her final sentence... 'Looking for my super babe for life. After talking for about a week we went out on our first date and I knew there was something special about her!`,
    },
    {
      id: 8,
      name: "8. Rebecca",
      content: `I was also adamant the next man I'd be with and commit to, would be the man I'd spend the rest of my life with (just not married). I was very fussy and didn't expect to meet a man on Tinder. I decided to sign up anyways and just match away and see what happened.`,
    },
    {
      id: 9,
      name: "9. Courtney & Miranda",
      content: `Thanks to Tinder I have found the love of my life and we are to be married.After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn't resist swiping right after reading her final sentence... 'Looking for my super babe for life. After talking for about a week we went out on our first date and I knew there was something special about her!`,
    },
  ];

// legal links content
  const legal = [
    {
      name: "Privacy",
      href: "https://policies.tinder.com/privacy/intl/en/?lang=en",
    },
    {
      name: "Consumer Health Data",
      href: "https://policies.tinder.com/consumer-health-data-privacy-policy/intl/en/?lang=en",
    },
    {
      name: "Privacy Policy",
      href: "https://policies.tinder.com/consumer-health-data-privacy-policy/intl/en/?lang=en",
    },
    {
      name: "Terms",
      href: "https://policies.tinder.com/terms/intl/en/?lang=en",
    },
    {
      name: "Cookie Policy",
      href: "https://policies.tinder.com/cookie-policy/intl/en/?lang=en",
    },
    {
      name: "Intellectual Property",
      href: "https://policies.tinder.com/intellectual-property/intl/en/?lang=en",
    },
  ];

  //career links content
  const carriers = [
    { name: "Carriers Portal", href: "https://www.lifeattinder.com/?lang=en" },
    { name: "Tech Blog", href: "https://medium.com/tinder?lang=en" },
  ];

  // social links content
  const Social = [
    { icon: <Instagram />, href: "https://www.instagram.com/tinder_india" },
    { icon: <MusicNote />, href: "https://www.tiktok.com/@tinder" },
    { icon: <YouTube />, href: "https://www.youtube.com/TinderIndia" },
    { icon: <Twitter />, href: "https://x.com/Tinder_India" },
    { icon: <Facebook />, href: "https://www.facebook.com/TinderInd" },
  ];

  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          p: "32px 82px 32px",
        }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <Stack
            id="box-stack"
            direction={"row"}
            flexWrap={"nowrap"}
            spacing={2}
            alignItems={"center"}
            sx={{
              animationName: "slideTrain",
              animationDuration: "10s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {boxes.map((box) => (
              <Box
                key={box.id}
                width={"393px"}
                height={"304px"}
                sx={{
                  border: "1px solid lightgray",
                  borderRadius: 2,
                  p: 3,
                  boxShadow: "0 0 1px 0 gray",
                  flexShrink:0
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
        </Box>

        <Stack direction={"row"} spacing={10} mt={10}>
          <Box display={"flex"} flexDirection={"column"} id="legal-links">
            <Typography variant="body1" fontWeight={"bold"}>
              Legal
            </Typography>
            {legal.map((item, ind) => (
              <Link
                key={ind}
                underline="none"
                href={item.href}
                sx={{
                  color: "gray",
                  cursor: "pointer",
                  ":hover": { color: "red" },
                  mt: 1.5,
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>

          <Box display={"flex"} flexDirection={"column"} id="career-links">
            <Typography variant="body1" fontWeight={"bold"}>
              Careers
            </Typography>
            {carriers.map((item, ind) => (
              <Link
                key={ind}
                underline="none"
                href={item.href}
                sx={{
                  color: "gray",
                  cursor: "pointer",
                  ":hover": { color: "red" },
                  mt: 1.5,
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>

          <Box display={"flex"} flexDirection={"column"} id="social-links">
            <Typography variant="body1" fontWeight={"bold"}>
              Social
            </Typography>
            <Stack direction={"row"} spacing={3} mt={1.5}>
              {Social.map((item, ind) => (
                <Link
                  key={ind}
                  underline="none"
                  href={item.href}
                  sx={{
                    color: "gray",
                    cursor: "pointer",
                    ":hover": { color: "red" },
                  }}
                >
                  {item.icon}
                </Link>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ m: "16px 0px" }} />

        <Stack
          direction={"row"}
          spacing={3}
          alignItems={"center"}
          id="app-downloads"
        >
          <Typography variant="body1" fontWeight={"bold"} color="black">
            Get the app!
          </Typography>
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
              height={"80px"}
            />
          </Link>
        </Stack>

        <Typography
          variant="subtitle2"
          color="gray"
          lineHeight={1.5}
          id="app-description"
        >
          Single people, listen up: If you’re looking for love, want to start
          dating, or just keep it casual, you need to be on Tinder. With over 55
          billion matches made, it’s the place to be to meet your next best
          match. Let’s be real, the dating landscape looks very different today,
          as most people are meeting online. With Tinder, the world’s most
          popular free dating app, you have millions of other single people at
          your fingertips and they’re all ready to meet someone like you.
          Whether you’re straight or in the LGBTQIA community, Tinder’s here to
          bring you all the sparks. <br />
          There really is something for everyone on Tinder. Want to get into a
          relationship? You got it. Trying to find some new friends? Say no
          more. New kid on campus and looking to make the most of your college
          experience? Tinder U’s got you covered. Tinder isn’t your average
          dating site — it’s the most diverse dating app, where adults of all
          backgrounds and experiences are invited to make connections, memories,
          and everything in between.
        </Typography>

        <Divider sx={{ m: "16px 0px" }} />

        <Typography variant="subtitle2" color="gray" mt={1} textAlign={"end"}>
          &copy; 2025 Tinder LLC, All Rights Reserved.
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
