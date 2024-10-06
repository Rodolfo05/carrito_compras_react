import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { ElectronicaPage } from './Pages/ElectronicaPage'
import NavBar from './NavBar'
import { ProductsPage } from './Pages/ProductsPage'
import Footer from './Footer'

export const Main = () => {
    return (
        <div className='main'>

            <header>
                <NavBar/>
            </header>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='electronica' element={<ProductsPage />} />
                <Route path='vestuario' element={<ProductsPage />} />
                <Route path='muebles' element={<ProductsPage />} />
                <Route path='deportes' element={<ProductsPage />} />
                <Route path='dormitorio' element={<ProductsPage />} />
                <Route path='juguetes' element={<ProductsPage />} />


                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>

            <Footer/>

        </div>
    )
}
