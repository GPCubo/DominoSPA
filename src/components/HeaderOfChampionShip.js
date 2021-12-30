import React from 'react';
import './HeaderOfChampionShip.css'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function HeaderOfChampionShip({values,calculatorPrice,sponsor,crop,setCrop,handleSendImg,setImage}) {
    return ( 
        <>
            <div className="HeaderOfChampionShip-div">
                <div className="HeaderOfChampionShip-div-2">
                    {sponsor && 
                    <>
                    <div className='HeaderOfChampionShip-div-sponsor'>
                        <p className='HeaderOfChampionShip-spanInside'>Patrocinado por:</p>
                        <ReactCrop 
                        src={sponsor} 
                        imageStyle={{width: "200px"}} 
                        ruleOfThirds={true} crop={crop} 
                        onChange={newCrop => setCrop(newCrop)}
                        onImageLoaded={setImage}
                        />
                        <button className='HeaderOfChampionShip-btn-crop' onClick={handleSendImg}>Selecciona y Recortar</button>
                    </div>

                    </>
                    }
                    <div className="HeaderOfChampionShip-div-10">
                        <div className="HeaderOfChampionShip-div-3">
                            <div className="HeaderOfChampionShip-div-8">
                                <p className="HeaderOfChampionShip-p">
                                    <span className="HeaderOfChampionShip-spanInside">Nombre del torneo:</span>
                                    <span>{values.NombreDelTorneo === "" ? "A definir":values.NombreDelTorneo}</span>
                                    <span className="HeaderOfChampionShip-spanInside">Numero de jugadores:</span>
                                    <span>{values.NJugadores === "" ? "A definir": values.NJugadores + " Jugadores"}</span>
                                </p>
                                <p className="HeaderOfChampionShip-p-2">
                                    <span className="HeaderOfChampionShip-spanInside">Tipo de juego:</span>
                                    <span>{values.TypeGame}</span>
                                    <span className="HeaderOfChampionShip-spanInside">Fecha de inicio:</span>
                                    <span>{values.Fecha === "" ? "A definir":values.Fecha}</span>
                                    <span className="HeaderOfChampionShip-spanInside">Numero de ronda:</span>
                                    <span>{values.NRondas === "" ? "A definir" : values.NRondas+" Rondas"}</span>
                                </p>
                                <p className="HeaderOfChampionShip-p-7">
                                    <span className="HeaderOfChampionShip-spanInside">Numero de puntos:</span>
                                    <span>{values.Puntos === "" ? "A definir" : values.Puntos+" PTS"}</span>
                                </p>
                            </div>
                            <div className="HeaderOfChampionShip-div-8">
                                <p className="HeaderOfChampionShip-p-3">
                                    <span className="HeaderOfChampionShip-spanInside">Dirección o URL:</span>
                                    <span>{values.DireccionURL === "" ? "A definir": values.DireccionURL}</span>
                                    <span className="HeaderOfChampionShip-spanInside">Modalidad del Juego:</span>
                                    <span>{values.Modalidad+"//"+values.ModalidadDentroDelTipo}</span>
                                </p>
                                <p className="HeaderOfChampionShip-p-4">
                                    <span className="HeaderOfChampionShip-spanInside">1° Lugar:</span>
                                    <span>{values.PremioPrimero === "" ? "A definir": values.PremioPrimero}</span>
                                    <span className="HeaderOfChampionShip-spanInside">2° Lugar:</span>
                                    <span>{values.PremioSegundo === "" ? "A definir": values.PremioSegundo}</span>
                                    <span className="HeaderOfChampionShip-spanInside">3° Lugar:</span>
                                    <span>{values.PremioTercero === "" ? "A definir": values.PremioTercero}</span>
                                </p>
                                <p className="HeaderOfChampionShip-p-5">
                                    <span className="HeaderOfChampionShip-spanInside">Inscripción:</span>
                                    <span>{values.PrecioInscripcion === "" ? "A definir" : values.PrecioInscripcion+"$"}</span>
                                </p>
                            </div>
                        </div>
                        <div className='HeaderOfChampionShip-div-11'>
                            <p className="HeaderOfChampionShip-p-5">
                                <span className="HeaderOfChampionShip-spanInside">Comentarios:</span>
                                <span>{values.Comentario}</span>
                            </p>
                        </div>
                    </div>
                </div>
                {
                    calculatorPrice && <p className="HeaderOfChampionShip-p-6">Precio Total:{calculatorPrice}$ (EL precio varia segun el Número de jugadores y Rondas)
                    </p>
                }
            </div>
        </>
     );
}

export default HeaderOfChampionShip;