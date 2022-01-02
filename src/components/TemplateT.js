import React,{useEffect,useState} from 'react'
import  './TemplateT.css'
import { useParams } from 'react-router-dom'
import { TemplateTChatScreen } from './TemplateTChatScreen';
import { Loader } from './Loader';
import { TemplateTSettings } from './TemplateTSettings';

export const TemplateT = ({user}) => {
    const defaultViews={
        TemplateTChatScreen: false,
        TemplateTSettings:false
    }

    const Params = useParams()
    const [torneo, setTorneo] = useState(null)
    const [loading, setLoading] = useState(false);
    const [views, setViews] = useState( defaultViews);

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
        setViews({...defaultViews,TemplateTChatScreen:true})
        setLoading(false)
        } catch (error) {
            alert(`Error: ${error.status} ${error.statusText} `)
            setLoading(false)
        }
    }

    useEffect(() => {
        if(!user) return
        setLoading(true)
        // http://localhost:9000
        fetching(`/torneo/${Params._idT}`)
    }, [])

    const handleViews = (e) =>{
        switch (e.target.id) {
            case 'TemplateTTable-btn-table':
                setViews({...defaultViews,TemplateTSettings:true})
                break;
            case 'TemplateTSettings-btn':
                setViews({...defaultViews,TemplateTChatScreen:true})
            default:
                break;
        }
    }

    return (
        <>
        {loading && <Loader/>}
        {torneo && 
             <>
                {views.TemplateTSettings && <TemplateTSettings torneo={torneo} handleViews={handleViews}/>}
                {views.TemplateTChatScreen && <TemplateTChatScreen torneo={torneo} user ={user} handleViews={handleViews}/>}
            </>
        }
        </>
    ) 
}
