import {ChampionShipCreatedP} from './ChampionShipCreatedP'
import { ChampionShipCreatedOperadorT } from './ChampionShipCreatedOperadorT';
import { Link } from 'react-router-dom';
export const ChampionShipCreatedTemplate = ({torneos}) => {
    return (
        <>
        {
        torneos.map(
            (el,index) => {
                return(
                    <div key={index} className="ChampionShipCreated-divPrincipal">
                        <div className="ChampionShipCreated-divChildOfPrincipal">
                            {el.Sponsor === false ? 
                            <div className='ChampionShipCreated-divImg-2'/> 
                            :
                            <img src={el.Sponsor} alt="Sponsor" className='ChampionShipCreated-divImg'/>
                            }
                            <div className="ChampionShipCreated-div-1-1">
                                <ChampionShipCreatedP title="Comienza a las:" DynamicText={[el.LocalTime]}/>
                                <ChampionShipCreatedP title="Modalidad" 
                                DynamicText={[`${el.TypeGame}//${el.Online}`,`${el.ModalidadDentroDelTipo}//${el.Modalidad}`]}/>
                                <ChampionShipCreatedP title="Puntuación" DynamicText={[el.Puntos+"PTS"]}/>
                                <ChampionShipCreatedP title="Nombre del torneo" DynamicText={[el.NombreDelTorneo]}/>
                            </div>
                        </div>
                        <div className="ChampionShipCreated-divChildOfPrincipal">
                            <ChampionShipCreatedP title="Número de rondas" DynamicText={[el.NRondas+" Rondas"]}/>
                            <ChampionShipCreatedP title="Número de jugadores" DynamicText={[el.NJugadores+" Jugadores"]}/>
                            <ChampionShipCreatedP title="Premios" DynamicText={[el.PremioPrimero,el.PremioSegundo,el.PremioTercero]}/>
                            <ChampionShipCreatedOperadorT title="Dirección o URL" comparador={el.DireccionURL} trueFalse={["No hay dirección o URL",el.DireccionURL]}/>
                            <ChampionShipCreatedP title="Inscripción" DynamicText={[el.PrecioInscripcion+"$"]}/>
                            <ChampionShipCreatedOperadorT title="Comentario" comparador={el.Comentario} trueFalse={["No hay comentarios",el.Comentario]}/>
                        </div>
                        <div className="ChampionShipCreated-divChildOfPrincipal">
                            <Link to={"/torneo/"+el._idT} className="ChampionShipCreated-btn-3-1">
                                {el._id ?"CONFIGURAR":"IR AL TORNEO"}
                            </Link>
                        </div>
                    </div>
                )}
        )
        }
        </>
    )
}
