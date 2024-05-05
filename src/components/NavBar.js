import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { Menu } from './Menu/Menu';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import ModalCart from './ModalCart';


const NavBar = () => {

  const { cantProdCart } = useContext(ShoppingCartContext);

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">

          <a className="navbar-brand" href="#">ELECTRO</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className='nav-bar-menu'>
              <div>
                <Menu />
              </div>

             <div className='nav-bar-cart'>
             <div className='divCartIcon col-md-2 offset-md-5' style={{ width: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FontAwesomeIcon icon={faBagShopping} />
                <div className='divCartCount'><label>{cantProdCart}</label></div>
              </div>

              <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
             </div>

            </div>

          </div>

        </div>

      </nav>




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