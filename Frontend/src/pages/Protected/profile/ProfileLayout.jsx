import { Avatar, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";


const ProfileLayout = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        p={2}
        m={2}
        width={"800px"}
        mx={"auto"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-betweem"}
          alignItems={"center"}
        >
          <Stack flexDirection={"column"} gap={1}>
            <Typography variant="h2" fontWeight={"bold"} fontSize={"2rem"}>
              Lorem ipsum.
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography
                variant="h2"
                fontSize={"1rem"}
              >
                Lorem ipsum.
              </Typography>
              <Chip
                label="threads.net"
                size="small"
                sx={{
                  fontSize: "0.8rem",
                }}
              />
            </Stack>
          </Stack>
          <Avatar
            src=""
            alt=""
            sx={{
              width: "60",
              height: "60",
            }}
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
    </>
  );
};

export default ProfileLayout;
