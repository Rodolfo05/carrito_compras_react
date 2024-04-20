import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from './MenuItem';

import dataItemsMenu from './dataMenu.json'

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
            <div className='menu' onClick={handleShowMenu}>
                <FontAwesomeIcon icon={faBars} />
                <h4>Menu</h4>
            </div>

            <div className={`menu-listado ${show ? "" : "hidden"}`}>
                <ul>
                    {itemsMenu.map(categoria => (
                        <li key={categoria.id}>
                            <strong>{categoria.nombre}</strong> - {categoria.descripcion}
                        </li>
                    ))}
                    {/* <MenuItem /> */}
                </ul>
            </div>
        </>

    )
}
