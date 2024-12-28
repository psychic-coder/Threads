import { Avatar, Button, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import {Link, Outlet} from "react-router-dom"
import React from "react";
import { FaInstagram } from "react-icons/fa";

const ProfileLayout = () => {

    const _700=useMediaQuery("(min-width:700px)");
    const _500=useMediaQuery("(min-width:500px)");
    const _300=useMediaQuery("(min-width:300px)");


  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        p={2}
        m={2}
        width={ "800px"}
        mx={"auto"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontSize={ "1rem"}
            >
              Lorem, ipsum.
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="h2" fontSize={"1rem" }>
                Lorem, ipsum.
              </Typography>
              <Chip
                label="threads.net"
                size="small"
                sx={{ fontSize:  "0.6rem" }}
              />
            </Stack>
          </Stack>
          <Avatar
            src={ ""}
            alt={""}
            sx={{ width:60, height:60  }}
          />
        </Stack>
        <Typography variant="subtitle2">Lorem ipsum dolor sit.</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle2" color="gray">
            19 Followers
          </Typography>
          <FaInstagram size={40} />
        </Stack>
      </Stack>
      <Button
        size={"large"}
        sx={{
          color: "black",
          width: "800px",
          mx: "auto",
          textAlign: "center",
          border: "1px solid gray",
          borderRadius: "10px",
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        Edit Profile
      </Button>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        my={5}
        pb={2}
        borderBottom={"2px solid gray"}
        fontSize={"1.2rem"}
        width={"800px"}
        mx={"auto"}
      >
        <Link to={"/profile/threads/1"} className="Link">Threads</Link>
        <Link to={"/profile/replies/1"} className="Link">Replies</Link>
        <Link to={"/profile/reposts/1"} className="Link">Reposts</Link>
      </Stack>
      <Outlet/>
    </>
  );
};

export default ProfileLayout;
