import {useState,useEffect} from 'react';
import './ChampionShipCreated.css'
import { Loader } from '../components/Loader';
import { helpZoneTime } from '../helpers/helpZoneTime';
import { ChampionShipCreatedTemplate } from './ChampionShipCreatedTemplate';

function ChampionShipCreated(user) {
    const [loading, setLoading] = useState(false);
    const [torneos, setTorneos] = useState(null);
    let config = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(user)
    }
    useEffect(() => {
        setLoading(true)
        const fetching = async(url) =>{
            try {
                const request= await fetch(url,config)
                let {data} = await request.json()
                if(request.status !== 200 || !data)throw request
                const hZoneTime = helpZoneTime(data)
                setTorneos(hZoneTime)
                setLoading(false)
                return
                } 
            catch (error) {
                alert(`Error: ${error.status} ${error.statusText} `)
                setLoading(false)
            }
        }
        // http://localhost:9000
        fetching("/torneos-activos")
    }, []);
    return ( 
        <>
        {loading && <Loader/>}
        <div className='ChampionShipCreated-div--gap'>
            {torneos && <ChampionShipCreatedTemplate torneos={torneos} />}
        </div>
        </>
     );
}

export default ChampionShipCreated;