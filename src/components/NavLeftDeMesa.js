import React from 'react';
import { Link } from 'react-router-dom';
function NavLeftDeMesa({user}) {
    const textContentNavNaipes = {
        INDIVIDUAL:["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga","Eliminatorio"],
    }

    return ( 
        <>
            <div className="NavLeft-div">
                <p className="NavLeft-p-2">
                    <span className="Navleft-span-2">DE MESA Y DEPORTES</span>
                </p>
                <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-DeMesaIndividual" hidden={true}/>
                <label className="NavLeft-label" htmlFor="NavLeft-DeMesaIndividual">INDIVIDUAL</label>
                {
                    Object.values(textContentNavNaipes.INDIVIDUAL).map((el,index)=>{return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                     className="NavLeft-span NavLeft-spanDeMesaIndividual">{el}</Link>)})
                }
            </div>
        </>
     );
}

export default NavLeftDeMesa;