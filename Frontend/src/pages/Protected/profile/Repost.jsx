import { Stack } from '@mui/material'
import React from 'react'
import Post from '../../../Components/home/Post'

const Repost = () => {
  return (
    <Stack
    flexDirection={"column"}
    gap={2}
    mb={10}
    width={"800px"}
    mx={"auto"}
  >
    <Post/>
    <Post/>
    <Post/>
  </Stack>
  )
}

export default Repost