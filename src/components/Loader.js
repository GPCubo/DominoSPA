import React from 'react'
import './Loader.css'
export const Loader = () => {
    return (
        <div className='loader-size'>
            <h1>Cargando</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
