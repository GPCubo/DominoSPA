import React, { useContext} from 'react';
import { Historico } from '../components/Historico';
import { UserContext } from '../context/UserProvider';


function TorneosActivos() {
        const {user} = useContext(UserContext)
    return ( 
        <>
            {user && <Historico/>} 
        </>
     );
}

export default TorneosActivos;