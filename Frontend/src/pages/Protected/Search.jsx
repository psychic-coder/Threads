import React from 'react'
import SearchInput from '../../Components/search/SearchInput'
import ProfileBar from '../../Components/search/ProfileBar'
import { Stack } from '@mui/material'

const Search = () => {
  return (
    <div>
      <SearchInput/>
      <Stack flexDirection={"column"} gap={1} mb={5} width={"50%"} maxWidth={'750px'} mx={'auto'}> 
      <ProfileBar/>
      <ProfileBar/>
      <ProfileBar/>
      </Stack>
    
    </div>
  )
}

export default Search