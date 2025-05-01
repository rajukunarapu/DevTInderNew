// import React, { useContext } from "react";
import Axios from "axios";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import AuthContext from "../context/AuthContext";
import SidebarContent from "../Components/SidebarContent";
import getProfileAPI from "../services/profileService";

const HomePage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getProfileAPI();
        setUser(userData.data);
      } catch (error) {
        console.log({ "failed to fetch profile : ": error });
      }
    };
    fetchUser();
  }, []);

  console.log({ user });

  // const {authCheck} = useContext(AuthContext)
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const res = await Axios.get(
      `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    const data = res.data;
    if (data.success) {
      // await authCheck() // for re-check the isAuthenticated
      navigate("/");
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <SidebarContent
          Name={user && user.firstName ? user.firstName : "User"}
          profileImage={
            user && user.photoURL.length !== 0 && user.photoURL[0].src
          }
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: 5,
            ml: 2,
            backgroundColor: "white",
            color: "black",
            fontWeight: "bolder",
            textTransform: "capitalize",
            position: "absolute",
            right: 0,
            zIndex: 10000,
          }}
          onClick={logoutHandler}
        >
          Log out
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
