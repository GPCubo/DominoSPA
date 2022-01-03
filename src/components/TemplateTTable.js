import { TemplateTTableIMap } from "./TemplateTTableIMap."
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
export const TemplateTTable = ({user,table,handleViews}) => {
    const [validuser, setValiduser] = useState(false);
    const Params = useParams()

    useEffect(() => {
        if(!table||!user)return
        let exist = []
        table.map(el=>{
            if(el.nickname === user.nickname){
                exist.push(true)
            }
        })
        if(exist[0] === true){
            setValiduser(exist[0])
        }
    }, []);

    const handleAddPlayer = async() =>{
        try {
            let config = {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(user)
            }
        const request= await fetch(`/addPlayerT/${Params._idT}`,config)
        console.log(request)
        if(request.status !== 200){throw request}
        alert("Usuario registrado")
        window.location.href = `/#/torneo/${Params._idT}`
        } catch (error) {
            alert(`Error: ${error.status} ${error.statusText} `)
        }
    }

    return (
        <div className='TemplateTTable-div'>
            <div className='TemplateTTable-div-2'>
            <p className="TemplateTTable-p">
                <span className="TemplateTTableMap-span">POS</span>
                <span className="TemplateTTableMap-span-nickname">Nick</span>
                <span className="TemplateTTableMap-span">PJ</span>
                <span className="TemplateTTableMap-span">PG</span>
                <span className="TemplateTTableMap-span">PP</span>
                <span className="TemplateTTableMap-span">PTS</span>
                <span className="TemplateTTableMap-span">PTaE</span>
                <span className="TemplateTTableMap-span">DIF</span>
            </p>
                {
                    table ?
                    <TemplateTTableIMap table={table} type="POS" />
                    :
                    <p>Todavia no hay jugadores registrados</p>
                }
            </div>
            <button className="TemplateTTable-btn" onClick={handleViews} id="TemplateTTable-btn-table">Ver Mesas</button>
            {validuser || <button className="TemplateTTable-btn" onClick={handleAddPlayer}>Anotarse</button>}
        </div>
    )
}
