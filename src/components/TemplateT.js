import React,{useEffect,useState} from 'react'
import  './TemplateT.css'
import { useParams } from 'react-router-dom'
import { TemplateTChatScreen } from './TemplateTChatScreen';
import { Loader } from './Loader';
import { PlayersAndTable } from './PlayersAndTable';

export const TemplateT = ({user}) => {
    const Params = useParams()
    const [torneo, setTorneo] = useState(null)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(!user) return
        setLoading(true)
        const fetching = async (url) =>{
            try {
                let config = {
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(user)
                }
            const request= await fetch(url,config)
            const data = await request.json()
            if(request.status !== 200){throw request}
            setTorneo(data)
            setLoading(false)
            } catch (error) {
                alert(`Error: ${error.status} ${error.statusText} `)
                setLoading(false)
            }
        }
        // http://localhost:9000
        fetching(`http://localhost:9000/torneo/${Params._idT}`)
    }, []);

    return (
        <>
        {loading && <Loader/>}
        {torneo && 
             <>
                <PlayersAndTable torneo={torneo}/>
                {/* <TemplateTChatScreen torneo={torneo} user ={user}/> */}
            </>
        }
        </>
    ) 
}
