import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Components/common/Header'
import Home from './pages/Protected/Home'
import Search from './pages/Protected/Search'
import Error from './pages/Error'
import Register from './pages/Protected/Register'




const App = () => {
  return (
    <>
    <Register/>
    {/* <BrowserRouter>
    <Header/>
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/user" element={<h1>User Profile</h1>} />
           <Route exact path="/search" element={<Search/>} />
           <Route  path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App