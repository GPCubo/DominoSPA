import React,{useState} from 'react';
import { Loader } from './Loader';
import { constDefaultRegisterUser } from '../ctte/constDefaultRegisterUser';
import './Register.css'
import { RegisterTemplate } from './RegisterTemplate';
function Register() {
    // Registro de usuario
    const [registro, setRegistro] = useState(constDefaultRegisterUser);
    const [loading, setLoading] = useState(false);
    // Actualiza el estado del registro
    const handleChangeFormRegister = (e) => setRegistro({...registro,[e.target.name]:e.target.value})
    // Una pequeña verificación de los datos y posteriormente la envia
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(registro.nickname.length > 15) {alert("Nombre de Usuario muy largo");return}
        if(!(registro.password === registro.passwordCheck)){alert("La contraseña no coincide");return}
        if([...Object.values(registro)].includes("")===true){alert("Campos incompletos");return}
        if(!document.getElementById("Register-coditions-checkbox").checked){alert("Acepte los terminos y condiciones");return}
        if(document.getElementById("Register-notifications-checkbox").checked) setRegistro({...registro,notifications:true})
        let config ={
            method: "POST",
            body: JSON.stringify(registro),
            headers: {
              "Content-Type": "application/json"
            }}
        const fetching = async(url)=>{
            try {
                setLoading(true)
                const sending = await fetch(url,config)
                const data = await sending.json()
                const {error,statusText} = data
                if(error)throw(statusText)
                alert("Usuario Registrado")
                setLoading(false)
                window.location.href = "/#/iseccion";
            } catch (err) {
                alert(err)
                setLoading(false)
            }
        }
        fetching("/add-user")

      }

    return (
        <>
            {loading&&<Loader/>}
            <RegisterTemplate handleChangeFormRegister={handleChangeFormRegister} handleSubmit={handleSubmit}/>
        </>
     );
}

export default Register;