import React, { useContext} from 'react';
import { UserContext } from '../context/UserProvider';
import {TemplateT} from '../components/TemplateT'

function Torneo() {
        const {user} = useContext(UserContext)
    return ( 
        <>
            {user && <TemplateT user={user}/>}  
        </>
     );
}

export default Torneo;