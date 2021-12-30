import React,{useState,useContext} from 'react';
import { UserContext } from '../context/UserProvider';
import { Loader } from './Loader';
import './LogIn.css';
import { LoginTemplate } from './LoginTemplate';
const defaulInputs = {email:"",password:""}
function LogIn() {
    const {user,setUser} = useContext(UserContext)
    const [varinputs, setVarinputs] = useState(defaulInputs);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setVarinputs({
            ...varinputs, [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let config ={
            method: "POST",
            body: JSON.stringify(varinputs),
            headers: {
              "Content-Type": "application/json"
            }}
        const fetching = async(url)=>{
            try {
                setLoading(true)
                const sending = await fetch(url,config)
                const data = await sending.json()
                const {infoU,error,statusText} = data
                if(error)throw(statusText)
                setLoading(false)
                window.localStorage.setItem('loggedNoteAppUser',JSON.stringify(infoU))
                setUser(infoU)
                setTimeout(() => {
                    document.getElementById("login-p-create-ac").click()
                }, 1000);
            } catch (err) {
                alert(err)
                setLoading(false)
            }
        }
        fetching("/searching-user")
    }
    return ( 
        <>
        {loading&&<Loader/>}
        <LoginTemplate handleChange={handleChange} handleSubmit={handleSubmit} user={user} />
        </>
     );
}

export default LogIn;