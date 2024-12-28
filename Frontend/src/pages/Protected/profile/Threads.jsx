import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import Post from "../../../Components/home/Post";

const Threads = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <Stack
      flexDirection={"column"}
      gap={2}
      mb={10}
      width={_700?"800px":"90%"}
      mx={"auto"}
    >
      <Post/>
      <Post/>
      <Post/>
    </Stack>
  );
};

export default Threads;
