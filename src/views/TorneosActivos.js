import React, { useContext} from 'react';
import ChampionShipCreated from '../components/ChampionShipCreated';
import { UserContext } from '../context/UserProvider';


function TorneosActivos() {
        const {user} = useContext(UserContext)
    return ( 
        <>
            {user && <ChampionShipCreated users={user}/>}
        </>
     );
}

export default TorneosActivos;