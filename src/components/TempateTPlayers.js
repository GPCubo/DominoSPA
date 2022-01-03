import {useEffect,useState} from 'react';
import { TemplateTInputsMap } from './TemplateTInputsMap';
import { TemplateTScore } from './TemplateTScore';

export const TempateTPlayers = ({description,starting,typeTable}) => {
    const [limitPlayers, setLimitPlayers] = useState(null);

    const handleIteration = (description)=>{
        const Sum = [];
        for (let i = 0; i < description.NJugadores; i++) {
            Sum.push(1)
        }
        return Sum
    }

    useEffect(() => {
        if(!description)return
        const iteration = handleIteration(description)
        setLimitPlayers(iteration)
        
    }, [description]);
    return (
        <>
        {
        starting &&
        <div className='TemplateTInputsMap-div-TemplateTScore'>
            {
                starting.length === 0 ?
                <h1 className='TemplateTPlayers-h1'>Carga los jugadores para crear las mesas</h1>
                :
                <TemplateTScore starting={starting} typeTable={typeTable}/>
            }
        </div>
        }
        {
        limitPlayers &&
        <div className='TemplateTInputsMap-div'>
            <TemplateTInputsMap limitPlayers={limitPlayers} title="Jugadores"/>
            <TemplateTInputsMap limitPlayers={limitPlayers} title="Reservas"/>
        </div>
        }
        </>
    )
}
