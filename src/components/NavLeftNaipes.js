import React from 'react';
import { Link } from 'react-router-dom';

function NavLeftNaipes({user}) {
    const textContentNavNaipes = {
        INDIVIDUAL:["MANO A MANO","Eliminatorio","Suizo","MESAS DE 4","Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga"],
        PAREJAS : ["Suizo","Eliminatorio","Liga"],
        EQUIPOS : ["Sencillo","Completo"]
    }
    return ( 
        <>
            <div className="NavLeft-div">
                <p className="NavLeft-p-2">
                    <span className="Navleft-span-2">NAIPES</span>
                </p>
                <div>
                    <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-NaipesIndividual" hidden={true}/>
                    <label className="NavLeft-label" htmlFor="NavLeft-NaipesIndividual">INDIVIDUAL</label>
                    {
                        Object.values(textContentNavNaipes.INDIVIDUAL).map((el,index)=>{return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                            className="NavLeft-span NavLeft-spanNaipesIndividual">{el}</Link>)})
                    }
                </div>
                <div>
                    <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-NaipesParejas" hidden={true}/>
                    <label className="NavLeft-label" htmlFor="NavLeft-NaipesParejas">PAREJAS</label>
                    {
                        Object.values(textContentNavNaipes.PAREJAS).map((el,index) => {return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                            className="NavLeft-span NavLeft-spanNaipesParejas">{el}</Link>)})
                    }
                </div>
                <div>
                    <input className="NavLeft-inputCheckbox" type="checkbox" id="NavLeft-NaipesEquipos" hidden={true}/>
                    <label className="NavLeft-label" htmlFor="NavLeft-NaipesEquipos">EQUIPOS</label>
                    {
                        Object.values(textContentNavNaipes.EQUIPOS).map((el,index) => {return(<Link to={user === null ? "/iseccion":"/torneos"} key={index} 
                            className="NavLeft-span NavLeft-spanNaipesEquipos">{el}</Link>)})
                    }
                </div>
            </div>
        </>
     );
}

export default NavLeftNaipes;