import { Stack } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Components/common/Header';

/*outlet is used to show the children route elements */
const ProtectedLayout = () => {
  return (
    <Stack
    flexDirection={"column"}
    maxWidth={"800px"}
    minWidth={'100%'}
    mx={"auto"}
    overflow={"hidden"}

    >
        <Header/>
        <Outlet/> 
    </Stack>
  )
}

export default ProtectedLayout;