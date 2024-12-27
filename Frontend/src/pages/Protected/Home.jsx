import React from "react";
import {Stack} from "@mui/material"
import Input from "../../Components/home/input";
import Post from "../../Components/home/Post";

const Home = () => {
  return (
    <>
      <Input/>
      <Stack flexDirection={"column"} gap={2} mb={10}>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </Stack>
    </>
  );
};

export default Home;
