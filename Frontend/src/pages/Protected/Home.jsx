import React from "react";
import {Button, Stack} from "@mui/material"
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
      <Button size="large" sx={{
        my:5,
        p:3,
        textDecoration:"underline",
        cursor:"pointer"
      }}>
        Load More
      </Button>
    </>
  );
};

export default Home;
