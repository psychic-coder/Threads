import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";

const AddPost = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _300 = useMediaQuery("(min-width:300px)");
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");

  const mediaRef = useRef();

  const handleClose = () => {};

  const handleMediaRef = () => {
    mediaRef.current.click();
  };

  const handlePost=()=>{
    
  }

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} className="image-icon" />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          New Thread...
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"row"} gap={2} mb={5}>
            <Avatar src="" alt="" />
            <Stack>
              <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
                Lorem, ipsum.
              </Typography>
              <textarea
                cols={_500 ? 40 : 25}
                rows={2}
                className="text1"
                placeholder="Start a thread"
                autoFocus
                onChange={(e) => setText(e.target.value)}
              />
              {media ? (
                <img
                  // the below is used for the conversion of the image to an url which we can use in src
                  src={URL.createObjectURL(media)}
                  alt=""
                  id="url-img"
                  width={_500 ? 300 : _300 ? 200 : 100}
                  height={_500 ? 300 : _300 ? 200 : 100}
                />
              ) : null}
              <FaImages
                size={28}
                className="image-icon"
                onClick={handleMediaRef}
              />
              <input
                type="file"
                accept="image/*"
                className="file-input"
                onChange={(e) => setMedia(e.target.files[0])}
                ref={mediaRef}
              />
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontSize={"1rem"} color={"gray"}>
              Anyone can reply
            </Typography>
            <Button
              size="large"
              sx={{
                bgcolor: "GrayText",
                color: "white",
                borderRadius: "10px",
                ":hover": {
                  bgcolor: "gray",
                  cursor: "progress",
                },
              }}
              onClick={handlePost}
            >
              Post
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPost;
