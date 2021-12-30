import React,{useEffect,useState} from 'react';
import './ChampionShipCreated.css'
import { Loader } from '../components/Loader';
import {helpHttp} from '../helpers/helpHttp'
import { Message } from './Message';

export const Historico = () => {
    const [loading, SetLoading] = useState(false);
    const [error, setError] = useState(null);
    const [torneos, setTorneos] = useState(null);

    let api = helpHttp()
    let url = "http://localhost:5000/TorneosFinalizados"
    useEffect(() => {
        SetLoading(true)
        setTimeout(() => {
            api.get(url)
            .then(res =>{
                if(!res.err){
                    setTorneos(res)
                }else{
                    setTorneos(null)
                    setError(res)
                }
            })
            SetLoading(false)
        }, 2000);
    }, []);
    return (
        <>
        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"/>}
        <div className='ChampionShipCreated-div--gap'>
        {torneos 
        &&
        torneos.map(
            el => {
                return(
                    <div className="ChampionShipCreated-divPrincipal">
                    <div className="ChampionShipCreated-divChildOfPrincipal">
                        {el.Sponsor === false ? 
                        <div className='ChampionShipCreated-divImg-2'/> 
                        :
                        <img src={el.Sponsor} alt="Sponsor" className='ChampionShipCreated-divImg'/>
                        }
                        <div className="ChampionShipCreated-div-1-1">
                            {/* Se Coloco dentro de un span por si desea poner un subtitulo */}
                            <p className="ChampionShipCreated-p-1-1">
                                <span className='ChampionShipCreated-span'>Comienza a las:</span>
                                <span>{el.Fecha}</span>
                            </p>
                            <p className="ChampionShipCreated-p-1-1">
                                <span className='ChampionShipCreated-span'>Modalidad</span>
                                <span>{el.TypeGame+"//"+el.Online}</span>
                                <span>{el.ModalidadDentroDelTipo+"//"+el.Modalidad}</span>
                            </p>
                            <p className="ChampionShipCreated-p-1-1">
                                <span className='ChampionShipCreated-span'>Puntuación</span>
                                <span>{el.Puntos+"PTS"}</span>
                            </p>
                            <p className="ChampionShipCreated-p-1-1">
                                <span className='ChampionShipCreated-span'>Nombre del torneo</span>
                                <span>{el.NombreDelTorneo}</span>
                            </p>
                        </div>
                    </div>
                    <div className="ChampionShipCreated-divChildOfPrincipal">
                        <p className="ChampionShipCreated-p-2-1">
                            <span className='ChampionShipCreated-span'>Número de rondas</span>
                            <span>{el.NRondas+" Rondas"}</span>
                        </p>
                        <p className="ChampionShipCreated-p-2-1">
                            <span className='ChampionShipCreated-span'>Número de jugadores</span>
                            <span>{el.NJugadores+" Jugadores"}</span></p>
                        <p className="ChampionShipCreated-p-2-1">
                            <span className='ChampionShipCreated-span'>Premios</span>
                            <span>{el.PremioPrimero}</span>
                            <span>{el.PremioSegundo}</span>
                            <span>{el.PremioTercero}</span>
                        </p>
                        <p className="ChampionShipCreated-p-2-1">
                            <span className='ChampionShipCreated-span'>Dirección o URL</span>
                            {
                                el.DireccionURL === ""
                                ?
                                <span>No hay dirección o URL</span>
                                :
                                <span>{el.DireccionURL}</span>
                            }
                        </p>
                        <p className="ChampionShipCreated-p-2-1">
                            <span className='ChampionShipCreated-span'>Incripción</span>
                            <span>{el.PrecioInscripcion+"$"}</span>
                        </p>
                        <p className="ChampionShipCreated-p-2-1">
                            <span className='ChampionShipCreated-span'>Comentario</span>
                            {
                                el.Comentario === ""
                                ?
                                <span  className='ChampionShipCreated-span--italic'>No hay comentarios</span>
                                :
                                <span  className='ChampionShipCreated-span--italic'>{el.Comentario}</span>
                            }
                        </p>
                    </div>
                    <div className="ChampionShipCreated-divChildOfPrincipal">
                        <button className="ChampionShipCreated-btn-3-2">
                            Finalizado
                        </button>
                    </div>
                    </div>
                )
            }
        )
        }
        </div>
        </>
    )
}
