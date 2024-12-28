import { Avatar, Menu, MenuItem, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { IoIosMore } from "react-icons/io";

const Comments = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const handleClose=()=>{}
  const handleDeleteComment=()=>{

  }
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
        <Stack flexDirection={"row"} gap={_700?2:1}>
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
           <IoIosMore size={_700?28:20} />
        </Stack>
      </Stack>
      <Menu
        anchorEl={""}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default Comments;
