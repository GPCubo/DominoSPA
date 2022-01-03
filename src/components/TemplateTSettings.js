import React,{useState,useEffect} from 'react'
import { TempateTPlayers } from './TempateTPlayers';
export const TemplateTSettings = ({torneo,handleViews}) => {
    const {description} = torneo
    const [typeTable, setTypeTable] = useState(null);
    const [starting, setStarting] = useState(null);

    const players = ["AAA","BBB","CCC","DDD","EEE","FFF","GGG","HHH","III","JJJ","KKK","LLL","MMM","NNN","OOO","PPP","QQQ","RRR","SSS","TTT","UUU"]
    const Rplayers = ["AAA-R","BBB-R","CCC-R","DDD-R","EEE-R","FFF-R","GGG-R","HHH-R","III-R","JJJ-R","KKK-R","LLL-R","MMM-R","NNN-R","OOO-R","PPP-R","QQQ-R","RRR-R","SSS-R","TTT-R","UUU-R"]

    const handleItarations = (typeTable) =>{
        let addPl = []
        if(typeTable === 1 && description.players){
            if(description.players.length === 0) return
            for(let i = 0; i <= players.length;i=i+2){addPl.push([players[i],players[i+1]])}
            console.log(addPl)
            setStarting(addPl)
        }
        if(typeTable === 2 && description.players){
            if(description.players.length === 0) return
            for(let i = 0;i <= players.length;i=i+4){addPl.push([players[i],players[i+1],players[i+2],players[i+3]])}
            setStarting(addPl)
        }
        else{
            setStarting(undefined)
        }
        return addPl
    }
useEffect(() => {
    if(!description)return
    switch (description.Modalidad) {
        case "Individual":
                switch (description.ModalidadDentroDelTipo) {
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
    const arrayIteration = handleItarations(typeTable)
    setStarting(arrayIteration)

}, [typeTable]);

    return (
        <>
        <div className='TempateTsettings-div'>
            <TempateTPlayers starting={starting} description={description} typeTable={typeTable}/>
            <button className='TemplateTTable-btn' onClick={handleViews} id='TemplateTSettings-btn'>Volver</button>
            <button className="TemplateTTable-btn">Modificar</button>
        </div>
        </>
    )
}
