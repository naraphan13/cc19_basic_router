import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'
import MainNav from '../components/MainNav'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/contact'
import Login from '../pages/login'
import Register from '../pages/register'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import Setting from '../pages/admin/Setting'
import Recap from '../pages/recap'
import RecapuseState from '../pages/RecapuseState'

function AppRoutes() {
    return (
        <div>

          

            <Routes>

                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="recap" element={<Recap/>} />
                <Route path="recapusestate" element={<RecapuseState/>} />
               
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                </Route>



                <Route path="admin" element={<Layout />}>

                    <Route index element={<Dashboard/>} />
                    <Route path="manage" element={<Manage/>} />
                    <Route path="setting" element={<Setting/>} />

                </Route>

            </Routes>

        </div>
    )
}

export default AppRoutes