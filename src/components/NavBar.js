import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const NavBar = ({ contadorCarrito, }) => {

    const hola = () => {
        console.log("fanca funto");
    }

    return (
        <div className='navbarBack'>
            <nav className="navbar bg-black">
                <div className="container-fluid">

                    

                    <a className="navbar-brand" href="#">
                        <img src="/image/ELECTROMARKET.png" className='imgLogo'/>
                    </a>


                    <div className='divCartIcon col-md-2 offset-md-5' style={{width: "50px"}} onClick={hola} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  
                        <FontAwesomeIcon className='carritoFont' icon={faCartShopping} /> <label>{contadorCarrito}</label>

                    </div>

                    <div className='col-md-2'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                   
                </div>
            </nav>
        </div>
    )
}

export default NavBar