import { Stack, TextField } from "@mui/material";
import React from "react";
import Post from "../../Components/home/Post";
import Comments from "../../Components/home/post/Comments";

const SinglePost = () => {
  return (
    <>
      <Stack flexDirection={"column"} my={5} gap={2}>
        <Post />
        <Stack flexDirection={"column"} gap={2} width={"80%"} mx={"auto"}>
          <Comments />
        </Stack>
        <TextField
          variant="outlined"
          autoFocus
          placeholder="Comment here ..."
          id="comment"
          sx={{
            width: "50%",
            mx: "auto",
            my: 5,
            p: 1,
          }}
        />
      </Stack>
    </>
  );
};

export default SinglePost;
