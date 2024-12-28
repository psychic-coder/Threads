import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  const _300 = useMediaQuery("(min-width:300px)");
  return (
    <div>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <FiArrowLeft
          size={_300 ? 32 : 24}
          className="image-icon"
          color="black"
        />
        <Link to={"/"} className="link">
          <AiFillHome size={_300 ? 32 : 24} color="black" />
        </Link>
        <Link to={"/search"} className="link">
          <IoIosSearch size={_300 ? 32 : 24} color="black" />
        </Link>
        <Link className="link">
          <TbEdit size={_300 ? 32 : 24} className="image-icon" color="black" />
        </Link>
        <Link className="link">
          <CiHeart size={_300 ? 32 : 24} color="black" />
        </Link>
        <Link to={"/profile/threads/1"} className="link">
          <RxAvatar size={_300 ? 32 : 24} color="black" />
        </Link>
      </Stack>
    </div>
  );
};

export default Navbar;
