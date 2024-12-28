import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { IoIosMore } from "react-icons/io";

const Comments = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={2}
        pb={4}
        borderBottom={"1px solid gray"}
        mx={"auto"}
        width={"90%"}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"0.9rem"}>
              Lorem, ipsum.
            </Typography>
            <Typography variant="subtitle2" fontSize={"0.9rem"}>
              Lorem, ipsum.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={1}
          color={"GrayText"}
          fontSize={"0.9rem"}
        >
           24 min 
           <IoIosMore size={28} />
        </Stack>
      </Stack>
    </>
  );
};

export default Comments;
