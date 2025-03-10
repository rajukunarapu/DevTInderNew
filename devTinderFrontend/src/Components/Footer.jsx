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

  const carriers = [
    { name: "Carriers Portal", href: "https://www.lifeattinder.com/?lang=en" },
    { name: "Tech Blog", href: "https://medium.com/tinder?lang=en" },
  ];

  const Social = [
    { icon: <Instagram />, href: "https://www.instagram.com/tinder_india" },
    { icon: <MusicNote />, href: "https://www.tiktok.com/@tinder" },
    { icon: <YouTube />, href: "https://www.youtube.com/TinderIndia" },
    { icon: <Twitter />, href: "https://x.com/Tinder_India" },
    { icon: <Facebook />, href: "https://www.facebook.com/TinderInd" },
  ];

  return (
    <>
      <Stack direction={"row"} spacing={10} mt={10}>
        <Box display={"flex"} flexDirection={"column"}>
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

        <Box display={"flex"} flexDirection={"column"}>
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

        <Box display={"flex"} flexDirection={"column"}>
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

      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <Typography variant="body1" fontWeight={"bold"} color="black">
          Get the app!
        </Typography>
        <Link
          underline="none"
          sx={{ cursor: "pointer" }}
          href="https://apps.apple.com/us/app/tinder-dating-app-chat-date/id547702041"
        >
          <img src={AppStore} alt="AppStore" width={"143px"} height={"48px"} />
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

      <Typography variant="subtitle2" color="gray" lineHeight={1.5}>
        Single people, listen up: If you’re looking for love, want to start
        dating, or just keep it casual, you need to be on Tinder. With over 55
        billion matches made, it’s the place to be to meet your next best match.
        Let’s be real, the dating landscape looks very different today, as most
        people are meeting online. With Tinder, the world’s most popular free
        dating app, you have millions of other single people at your fingertips
        and they’re all ready to meet someone like you. Whether you’re straight
        or in the LGBTQIA community, Tinder’s here to bring you all the sparks.{" "}
        <br />
        There really is something for everyone on Tinder. Want to get into a
        relationship? You got it. Trying to find some new friends? Say no more.
        New kid on campus and looking to make the most of your college
        experience? Tinder U’s got you covered. Tinder isn’t your average dating
        site — it’s the most diverse dating app, where adults of all backgrounds
        and experiences are invited to make connections, memories, and
        everything in between.
      </Typography>

      <Divider sx={{ m: "16px 0px" }} />

      <Typography variant="subtitle2" color="gray" mt={1} textAlign={"end"}>
        &copy; 2025 Tinder LLC, All Rights Reserved.
      </Typography>
    </>
  );
};

export default Footer;
