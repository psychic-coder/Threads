import React from "react";
import { Stack, Typography } from "@mui/material";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Post2 = () => {
  return (
    <>
      <Stack flexDirection={"column"} justifyContent={"space-between"}>
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontSize={"1rem"} fontWeight={"bold"}>
              Lorem ipsum
            </Typography>
            <Typography variant="h5" fontSize={"1.2rem"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              quod.
            </Typography>
          </Stack>
          <img
            src="/error-bg.png"
            width={"400px"}
            height={"auto"}
            loading="lazy"
          />
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Stack flexDirection={"row"} gap={2} m={1}>
            <FaRegHeart size={30} />
            <FaRegComment size={30} />
            <FaRetweet size={30} />
            <IoMdSend size={30} />
          </Stack>
          <Stack
            flexDirection={"row"}
            gap={1}
            position={"relative"}
            top={-3}
            left={4}
          >
            <Typography variant="caption" color={'GrayText'} fontSize={'1.1rem'}>
                2 likes .
            </Typography>
            <Typography variant="caption" color={'GrayText'} fontSize={'1.1rem'}>
                1 comment
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Post2;
