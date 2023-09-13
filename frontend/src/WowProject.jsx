import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavBar from './ProjectComponents/NavBar'
import HomePage from './ProjectComponents/HomePage'

const WowProject = () => {
  return (
    <div>

    <Routes>
        <Route path = "/" element = {<div><NavBar></NavBar><Outlet></Outlet></div>}>
            <Route index element = {<HomePage></HomePage>}></Route>

                
              {/* <Route path = "create" element = {<CreateAccount></CreateAccount>}></Route> */}

            </Route>

        {/* </Route> */}
    </Routes>

    </div>
  )
}

export default WowProject