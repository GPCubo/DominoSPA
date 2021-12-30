import React from 'react';
import { Link } from 'react-router-dom';
function NavLeftDomino({user}) {
    const textContentNavDomino = {
        INDIVIDUAL:["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga"],
        PAREJAS : ["Suizo","Eliminatorio","Liga"],
        EQUIPOS : ["Sencillo","Completo"]
    }
    return ( 
        <>
            <div className="NavLeft-div">
                <p className="NavLeft-p-2">
                    <span className="Navleft-span-2">DOMINO</span>
                </p>
                <div>
                    <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-DominoIndividual" hidden={true}/>
                    <label className="NavLeft-label" htmlFor="NavLeft-DominoIndividual">INDIVIDUAL</label>
                    {
                        Object.values(textContentNavDomino.INDIVIDUAL).map((el,index)=>{return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                            className="NavLeft-span NavLeft-spanDominoIndividual">{el}</Link>)})
                    }
                </div>
                <div>
                    <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-DominoParejas" hidden={true}/>
                    <label className="NavLeft-label" htmlFor="NavLeft-DominoParejas">PAREJAS</label>
                    {
                        Object.values(textContentNavDomino.PAREJAS).map((el,index) => {return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                             className="NavLeft-span NavLeft-spanDominoParejas">{el}</Link>)})
                    }
                </div>
                <div>
                    <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-DominoEquipos" hidden={true}/>
                    <label className="NavLeft-label" htmlFor="NavLeft-DominoEquipos">EQUIPOS</label>
                    {
                        Object.values(textContentNavDomino.EQUIPOS).map((el,index) => {return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                             className="NavLeft-span NavLeft-spanDominoEquipos">{el}</Link>)})
                    }
                </div>
            </div>
        </>
     );
}

export default NavLeftDomino;