import { Stack } from "@mui/material";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link to={"/"}>
        <AiFillHome size={32}/>
        </Link>
        <Link to={"/search"}>
        <IoIosSearch size={32}/>
        </Link>
        <Link>
        <TbEdit size={32}/>
        </Link>
        <Link>
        <CiHeart size={32}/>
        </Link>
        <Link to={"/profile"}>
        <RxAvatar size={32}/>
        </Link>
      </Stack>
    </div>
  );
};

export default Navbar;
