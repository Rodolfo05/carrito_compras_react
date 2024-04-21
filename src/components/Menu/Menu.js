import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from './MenuItem';

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


    return (
        <>
            <div className='menu-items' onClick={handleShowMenu}>
                <FontAwesomeIcon icon={faBars} />
                <h4>Menu</h4>
            </div>

            <div className={`menu-listado ${show ? "" : "hidden"}`}>
                <ul>
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
