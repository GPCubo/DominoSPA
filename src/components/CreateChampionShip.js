import React from 'react';
import './CreateChampionShip.css'
function CreateChampionShip({game,handleChangeForm,handleSubmitNewT}) {
    return ( 
        <>
            <form className="CreateChampionShip-form" id='CreateChampionShip-form' >
                <div className="CreateChampionShip-div-2">
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="number" name="NJugadores" placeholder="Numero de jugadores" />
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="number"name="NRondas" placeholder="N° de Rondas"/>
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="number" name="Puntos" placeholder="Puntos" />
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText"type="number"name="PrecioInscripcion"placeholder="Precio de inscripción ($)" min={0}/>
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="text" name="NombreDelTorneo" placeholder="Nombre del torneo" />
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="text" name="DireccionURL" placeholder="Dirección o URL" />
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="text" name="Comentario" placeholder="Comentario" maxLength={40}/>
                    <div className="CreateChampionShip-div">
                        <label htmlFor="CreateChampionShip-inputFile">Sube la imagen de tu Sponsor</label>
                        <input onChange={handleChangeForm} type="file" id="CreateChampionShip-inputFile" className="CreateChampionShip-inputFile" name="Sponsor"/>
                    </div>
                </div>
                <div className="CreateChampionShip-div-2">
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="text" name="PremioPrimero" placeholder="1° Premio"/>
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="text" name="PremioSegundo" placeholder="2° Premio"/>
                    <input onChange={handleChangeForm} className="CreateChampionShip-inputText" type="text" name="PremioTercero" placeholder="3° Premio"/>
                    <select onChange={handleChangeForm} className="CreateChampionShip-select" name="Online">
                        <option value="Domino" >Presencial</option>
                        <option value="Online" >Online</option>
                    </select>
                    <select onChange={handleChangeForm} className="CreateChampionShip-select" name="Modalidad">
                        <option value="Individual" >Individual</option>
                        <option value="Parejas" >Parejas</option>
                        <option value="Equipos" >Equipos</option>
                    </select>
                    <select onChange={handleChangeForm} className="CreateChampionShip-select" name="TypeGame">
                        <option value="Domino" >Domino</option>
                        <option value="Naipes" >Naipes</option>
                        <option value="Otro" >Otros</option>
                    </select>
                    <select onChange={handleChangeForm} className="CreateChampionShip-select" name="ModalidadDentroDelTipo">
                        {
                            game &&
                            Object.values(game).map(
                                (el,key) => <option key={key}>{el}</option>
                            )
                        }
                    </select>
                    <div className="CreateChampionShip-div">
                        <label htmlFor="CreateChampionShip-inputDateTime">Fecha y hora de inicio: </label>
                        <input onChange={handleChangeForm} type="datetime-local" placeholder="Fecha" id="CreateChampionShip-inputDateTime" className="CreateChampionShip-inputDateTime" name="Fecha"/>
                    </div>
                    
                </div>
                <input className="CreateChampionShip-inputSubmit" onClick={handleSubmitNewT} type="submit" value="Pagar"/>
            </form>
        </>
     );
}

export default CreateChampionShip;