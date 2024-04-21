import React from 'react'
import { Header } from './Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { ElectronicaPage } from './Pages/ElectronicaPage'
import { VestuarioPage } from './Pages/VestuarioPage'

export const Main = () => {
    return (
        <div>

            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='electronica' element={<ElectronicaPage />} />
                <Route path='vestuario' element={<VestuarioPage />} />

                {/* <Route path='/*' element={<HomePage/>} /> */}

                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>



        </div>
    )
}
