import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { TemplateTMessageOnChat } from './TemplateTMessageOnChat';
export const TemplateTChatScreen = ({torneo,user}) => {
    const [message, setMessage] = useState("");
    const Params = useParams()
    const {description}= torneo
    const {_id,nickname} = user
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault()
            if(message === "") return
            document.getElementById('TemplateTChatScreen-form').reset()
            let config ={
                method:"PUT",
                body:JSON.stringify({message,_id,nickname}),
                headers:{"Content-Type": "application/json"}
            }
            // http://localhost:9000
            const fetching = await fetch(`/chat/${Params._idT}`,config)
            if(fetching.status !== 200) throw fetching
            setMessage("")

        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
          <div className='TemplateTChatScreen'>
                <div className='TemplateTChatScreen-contain'>
                    <div className='TemplateTChatScreen-header'>
                        <img className='TemplateTChatScreen-sponsor' alt="Sponsor" src='assets/svg/login-bg.svg'/>
                        <h1 className='TemplateTChatScreen-title'>{description.NombreDelTorneo}</h1>
                    </div>
                    <TemplateTMessageOnChat user={user}/>          
                </div>
                <div className='TemplateTChatScreen-footer'>
                    <form onSubmit={handleSubmit} id='TemplateTChatScreen-form'>
                        <input type="text" className='TemplateTChatScreen-input' onChange={(e)=>{setMessage(e.target.value)}}/>
                        <input type="submit" hidden/>
                    </form>
                </div>
          </div>
          <img src='assets/svg/people_white_24dp.svg' alt='icon-people' className='TemplateTChatScreen-btn'/>
          <img src='assets/svg/update_white_24dp.svg' alt='icon-people' className='TemplateTChatScreen-btn'/>
        </>
    )
}
