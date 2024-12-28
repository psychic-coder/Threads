import {
  Avatar,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const ProfileLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _300 = useMediaQuery("(min-width:300px)");

  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        p={2}
        m={2}
        width={_700 ? "800px" : "90%"}
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
              fontSize={_300 ? "2rem" : "1rem"}
            >
              Lorem, ipsum.
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="h2" fontSize={_300 ? "2rem" : "0.8rem"}>
                Lorem, ipsum.
              </Typography>
              <Chip
                label="threads.net"
                size="small"
                sx={{ fontSize: _300 ? "0.8rem" : "0.6rem" }}
              />
            </Stack>
          </Stack>
          <Avatar
            src={""}
            alt={""}
            sx={{ width: _300 ? 60 : 40, height: _300 ? 60 : 40 }}
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
          <FaInstagram size={_300?40:24} />
        </Stack>
      </Stack>
      <Button
        size={"large"}
        sx={{
          color: "black",
          width: _700?"800px":"90%",
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
        fontSize={_500?"1.2rem":(_300?"1.1rem":"0.9rem")}
        width={_700?"800px":"90%"}
        mx={"auto"}
      >
        <Link to={"/profile/threads/1"} className="Link">
          Threads
        </Link>
        <Link to={"/profile/replies/1"} className="Link">
          Replies
        </Link>
        <Link to={"/profile/reposts/1"} className="Link">
          Reposts
        </Link>
      </Stack>
      <Outlet />
    </>
  );
};

export default ProfileLayout;
