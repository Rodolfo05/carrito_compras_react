import React from 'react'
import { ToastContainer, toast } from 'react-toastify'


export const HogarJardinPage = () => {

    const notifi = () => {
        toast("q pasa");
    }


  return (
    <div>
        <button onClick={notifi}>Notifi</button>
        <ToastContainer/>
    </div>
  )
}
