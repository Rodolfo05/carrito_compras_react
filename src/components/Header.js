import React from 'react'
import NavBar from './NavBar'

export const Header = () => {
    return (

        <header>

            <div className='header'>

            <div class="menu container">

            <a className="navbar-brand" href="#">
                <img src="/image/ELECTROMARKET.png" className='imgLogo' />
            </a>

                    {/* <NavBar contadorCarrito={contadorCarrito}/> */}

                    <NavBar/>

                </div>

            </div>

        </header>

    )
}
