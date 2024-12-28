import { Stack, useMediaQuery } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Components/common/Header';
import AddPost from '../../Components/modals/AddPost';

/*outlet is used to show the children route elements */
const ProtectedLayout = () => {

  const _700=useMediaQuery("(min-width:700px)");

  return (
    <Stack
    flexDirection={"column"}
    maxWidth={_700?"800px":"90%"}
    minWidth={'100%'}
    mx={"auto"}
    overflow={"hidden"}

    >
        <Header/>
        <AddPost/>
        <Outlet/> 
    </Stack>
  )
}

export default ProtectedLayout;