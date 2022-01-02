import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { TemplateTMessageOnChat } from './TemplateTMessageOnChat';
import { TemplateTTable } from './TemplateTTable';
export const TemplateTChatScreen = ({torneo,user,handleViews}) => {
    const [message, setMessage] = useState("");
    const Params = useParams()
    const {description}= torneo
    const {_id,nickname} = user
    const table =[
        {nickname:"Carlos",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Diego",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Luis",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Maria",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Jose",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"RobertSADSADQRo",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Ronald",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Ana",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Dania",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"Sofia",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"},
        {nickname:"gpanti2n",PJ:"000",PG:"000",PP:"000",PTS:"000",PTaE:"000",Dif:"000"}
    ]
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
            <div className='TemplateTChatScreen-div-2'>
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
                <TemplateTTable table={table||null} user={user} handleViews={handleViews}/>
            </div>
        </>
    )
}
