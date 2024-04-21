import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import { Menu } from './Menu/Menu';
import { ShoppingCartContext } from '../context/ShoppingCartContext';


const NavBar = () => {

    
  const {cantProdCart} = useContext(ShoppingCartContext);

    return (

        <nav className="navbar">


            <Menu />

            <div className='divCartIcon col-md-2 offset-md-5' style={{ width: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FontAwesomeIcon className='carritoFont' icon={faCartShopping} /> <h2>{cantProdCart}</h2> 
            </div>

            <div className='col-md-2'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>

        </nav>

    )
}

export default NavBar