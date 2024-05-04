import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Menu } from './Menu/Menu';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import ModalCart from './ModalCart';
import { TYPES } from '../actions/shoppingAction';
import { toast } from 'react-toastify';
import { cartReducer, cartInitialState } from '../reducers/cartReducer';


const NavBar = () => {


  const { cantProdCart } = useContext(ShoppingCartContext);




  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ELECTRO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>


                <div className='divCartIcon col-md-2 offset-md-5' style={{ width: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>


              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>

                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">

              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <Menu />


      {/* <nav classNameName="navbar">

        <Menu />

        <div classNameName='divCartIcon col-md-2 offset-md-5' style={{ width: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
          <FontAwesomeIcon classNameName='carritoFont' icon={faCartShopping} /> <h2>{cantProdCart}</h2>
        </div>

        <div classNameName='col-md-2'>
          <form classNameName="d-flex" role="search">
            <input classNameName="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
            <button classNameName="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>

      </nav> */}



      {
        cantProdCart === 0 ? null : <ModalCart />
      }
    </>


  )
}

export default NavBar