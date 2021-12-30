import React from 'react';
import { Link } from 'react-router-dom';
import './MainBannerPrincipal.css'
function MainBannerPrincipal({user}) {
    const pdArray = ["CREA TORNEO SUIZO","CREA TORNEO ROTADO","CREA TORNEO ELIMINATORIO","CREA TORNEO MIXTO ROT-SUIZ","CREA TORNEO MIXTO SUIZ-ROT","CREA TORNEO DE EQUIPOS","CREA UNA LIGA","CREA TORNEO DE EQUIPOS","CREA ENFRENTAMIENTOS"]
    return ( 
        <>
        <div className="MainBannerPrincipal-div-2">
            <div className="MainBannerPrincipal-div"/>
            {/* Puedes sustituir este div por una img con esta clase */}
            <div className="MainBannerPrincipal-div-4">
            {
                pdArray.map(
                    (el,index)=>{
                        return(
                            <div key={index} className="MainBannerPrincipal-div-3">
                                <div className="MainBannerPrincipal-div-5"/>
                                <p className="MainBannerPrincipal-p">{el}</p>
                                <p className="MainBannerPrincipal-p-2">APTO DE 16 a 64 JUGADORES</p>
                                <Link className="MainBannerPrincipal-btn" to={user === null ? "/iseccion":"/torneos"}>Crear</Link>
                            </div>
                        )
                })
            }
            </div>
        </div>
        </>
     );
}

export default MainBannerPrincipal;