import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {TemplateTMapMessageOnChat} from './TemplateTMapMessageOnChat'
export const TemplateTMessageOnChat = ({user}) => {
    const [bucle, setBucle] = useState(true);
    const [chat, setChat] = useState(null);
    const Params = useParams()
    
    const SetTimeOut =()=>{
        setTimeout(() => {
            if(bucle === true) {setBucle(false)}
            else {setBucle(true)}
        }, 60000);
    }

    useEffect(() => {
        const gettingData = async() =>{
            try {
                // http://localhost:9000
                const fetching = await fetch(`/chat/${Params._idT}`)
                const {chat} = await fetching.json()
                if(fetching.status !== 200) throw (fetching)
                console.log(chat)
                setChat(chat)
                SetTimeOut()
            } catch (error) {
                alert(`Error ${error.status} ${error.statusText}`)
                SetTimeOut()
            }
        }
        if(window.location.hash === `#/torneo/${Params._idT}`) gettingData()
        return
    }, [bucle]);

    return (
    <div className='TemplateTMessageOnChat-main'>
        {chat &&<TemplateTMapMessageOnChat chat={chat} user={user}/>}
    </div>
    )
}

