import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import dataItemsMenu from './dataMenu.json'
import { Link, NavLink } from 'react-router-dom';

export const Menu = () => {

    const [show, setShow] = useState(false);
    const [itemsMenu, setItemsMenu] = useState([]);

    const obtenerDatos = async () => {
        try {
            setItemsMenu(dataItemsMenu);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

    useEffect(() => {
        obtenerDatos();
    }, []);

    const handleShowMenu = () => {
        setShow(!show);
    }


    const cambiaMenu = () => {
        setShow(false);
    }


    return (
        <>
            <div className='menu' onClick={handleShowMenu}>
                <FontAwesomeIcon icon={faBars} />
                <h4>Menu</h4>
            </div>

            <div className={`menu-listado ${show ? "" : "hidden"}`}>
                <ul onClick={cambiaMenu}>
                    {itemsMenu.map(categoria => (
                        <li key={categoria.id}>
                           {/* <Link to={`/${categoria.id}`}>{categoria.nombre}</Link> */}
                           <NavLink className={'nav-item'} to={`/${categoria.nombreUrl}`}>{categoria.nombre}</NavLink>
                        </li>
                    ))}
                    {/* <MenuItem /> */}
                </ul>
            </div>
        </>

    )
}
