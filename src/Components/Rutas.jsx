import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar'
import {Animes} from '../Pages/Animes'
import { Error404 } from '../Pages/Error404'
import {Home} from '../Pages/Home'

export const Rutas = () => {
  return (
    <div>
       <NavBar />
        <Routes>
            <Route path="/animes" element={<Animes />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
       
    </div>

  )
}
