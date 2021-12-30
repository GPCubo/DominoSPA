import React,{useState,useEffect} from 'react'
import './PlayersAndTable.css'
export const PlayersAndTable = ({torneo}) => {
    console.log(torneo)
    const [minplayers, setMinplayers] = useState(12);
    const [typeTable, setTypeTable] = useState(null);
    const [starting, setStarting] = useState(null);
    const toggleListPlayers = () =>{
        if(minplayers === 12)setMinplayers(players.length)
        else setMinplayers(12)
    }
    const players = ["AAA","BBB","CCC","DDD","EEE","FFF","GGG","HHH","III","JJJ","KKK","LLL","MMM","NNN","OOO","PPP","QQQ","RRR","SSS","TTT","UUU"]
    const Rplayers = ["AAA-R","BBB-R","CCC-R","DDD-R","EEE-R","FFF-R","GGG-R","HHH-R","III-R","JJJ-R","KKK-R","LLL-R","MMM-R","NNN-R","OOO-R","PPP-R","QQQ-R","RRR-R","SSS-R","TTT-R","UUU-R"]

useEffect(() => {
    switch (torneo.Modalidad) {
        case "Individual":
                switch (torneo.ModalidadDentroDelTipo) {
                    case "Suizo(Mesa de 4)":
                    case "Rotado(Mesa de 4)":
                    case "Mixto rot-suiz(Mesa de 4)":
                    case "Mixto suiz-tot(Mesa de 4)":
                    case "Liga(Mesa de 4)":
                        setTypeTable(2)
                        break;
                    default:
                        setTypeTable(1)
                        break;
                }
            break;
        case "Parejas":
        case "Otros":
        case "Equipos":
            setTypeTable(2)
            break;
        default:
            // Recuerda cambiar por setError
            setTypeTable(null)
            break;
    }
    let addPl = []
    if(typeTable === 1){
        for(let i = 0; i <= players.length;i=i+2){addPl.push([players[i],players[i+1]])}
        setStarting(addPl)
    }
    if(typeTable === 2){
        for(let i = 0;i <= players.length;i=i+4){addPl.push([players[i],players[i+1],players[i+2],players[i+3]])}
        setStarting(addPl)
    }

}, [typeTable]);
    return (
        <>
        <h1>Hello World</h1>
        {/* <div className='PlayersAndTable-divWrap'>
            <div className='PlayersAndTable-div'>
                <ul className='PlayersAndTable-ul'>
                    <h1>Jugadores</h1>
                {
                    minplayers === 12 ? 
                    players.slice(0,12).map((el,index) => <li className='PlayersAndTable-li' key={index}>{el}</li>)
                    :
                    players.map((el,index) => <li className='PlayersAndTable-li' key={index}>{el}</li>)
                }
                </ul>
                <ul className='PlayersAndTable-ul'>
                    <h1>Reservas</h1>
                    {
                        minplayers === 12 ? 
                        Rplayers.slice(0,12).map((el,index) => <li className='PlayersAndTable-li' key={index}>{el}</li>)
                        :
                        Rplayers.map((el,index) => <li className='PlayersAndTable-li' key={index}>{el}</li>)
                    }
                </ul>
                <button className='PlayersAndTable-btn' onClick={toggleListPlayers}>{minplayers === 12 ? "Ampliar listas":"Comprimir listas"}</button>
            </div>
            {
            starting && 
            <div className='PlayersAndTable-div-2'>
                    {
                    typeTable === 1 ?
                    starting.map((el,index) =>{
                    return(
                        <div className='PlayersAndTable-div-4' key={index}>
                            <h1 className='PlayersAndTable-h1' >{`Mesa ${index}`}</h1>
                            <div className='PlayersAndTable-div-3'>
                                <p className='PlayersAndTable-p'>Score</p>
                                <span className='PlayersAndTable-span'>{el[0]}</span>

                            </div>
                            <div className='PlayersAndTable-div-3'>
                                <p className='PlayersAndTable-p'>Score</p>
                                <span className='PlayersAndTable-span'>{el[1]}</span>
                            </div>
                        </div>
                    )}
                    )
                    :
                    starting.map((el,index) =>{
                    return(
                        <div key={index} className='PlayersAndTable-div-4'>
                            <h1 className='PlayersAndTable-h1'>{`Mesa ${index}`}</h1>
                            <div className='PlayersAndTable-div-3'>
                                <p className='PlayersAndTable-p'>Score</p>
                                <span className='PlayersAndTable-span'>{el[0]}</span>
                                <span className='PlayersAndTable-span'>{el[1]}</span>
                            </div>
                            <div className='PlayersAndTable-div-3'>
                                <p className='PlayersAndTable-p'>Score</p>
                                <span className='PlayersAndTable-span'>{el[2]}</span>
                                <span className='PlayersAndTable-span'>{el[3]}</span>
                            </div>
                        </div>
                        )}
                    )
                    }
            </div>
            }
        </div> */}
        </>
    )
}
