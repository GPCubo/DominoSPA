import React, { useContext } from 'react';
// import { ChatScreen } from '../components/ChatScreen';
import { UserContext } from '../context/UserProvider';

function Contacto() {
    const {user} = useContext(UserContext)
    return ( 
        <>
            {/* <PlayersAndTable/> */}
            {/* {user && <ChatScreen/>} */}
        </>
     );
}

export default Contacto;