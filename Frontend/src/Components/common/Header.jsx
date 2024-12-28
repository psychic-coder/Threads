import React from "react";
import { Grid, Grid2, Stack, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <div>
      {_700 ? (
        <Stack
          flexDirection={"row"}
          height={52}
          justifyContent={"space-around"}
          alignItems={"center"}
          position={"sticky"}
          top={0}
          py={1}
        >
          <img
            src="/Threads-logo-black-bg.webp"
            alt="logo"
            width={60}
            height={48}
          />
          <Stack
            justifyContent={"center"}
            width={"350px"}
            bgcolor={"aliceblue"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>
          <IoMenu size={36} className="image-icon" color="gray"/>
        </Stack>
      ) : (
        <>
          <Stack
            position={"fixed"}
            bottom={0}
            justifyContent={"center"}
            width={"100%"}
            height={52}
            p={1}
            bgcolor={"aliceblue"}
            zIndex={2}
          >
            <Navbar />
          </Stack>
          <Grid2
            container
            height={60}
            justifyContent={"flex-end"}
            alignItems={"center"}
            p={1}
          >
            <Grid2 item xs={6} >
              <img src="/Threads-logo-white-bg.png" alt="logo" width={60} height={35}/>
            </Grid2>
            <IoMenu size={36} className="image-icon" color="gray" />
          </Grid2>
        </>
      )}
    </div>
  );
};

export default Header;
