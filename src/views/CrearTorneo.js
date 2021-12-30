import React,{useState,useEffect, useContext} from 'react';
import '../App.css'
import CreateChampionShip from '../components/CreateChampionShip';
import HeaderOfChampionShip from '../components/HeaderOfChampionShip';
import { UserContext } from '../context/UserProvider';
import {Loader} from '../components/Loader'
import { useCropReact } from '../customhooks/useCropReact';
function CrearTorneo() {
    let useCrop = useCropReact()
    const {user} = useContext(UserContext)
    const [loading, SetLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const defaulValues = {
        _id: "",
        NJugadores : "",
        NombreDelTorneo : "",
        NRondas : "",
        Puntos : "",
        PrecioInscripcion:"",
        DireccionURL:"",
        PremioPrimero:"",
        PremioSegundo:"",
        PremioTercero:"",
        Comentario:"",
        Online:"Presencial",
        Modalidad:"Individual",
        TypeGame:"Domino",
        Fecha:"",
        ModalidadDentroDelTipo: "Suizo",
        TCoding:"",
        ZoneTime:null,
        Sponsor:false
      }
    // Guarda la infromación suministrada del usuario
    const [values, setValues] = useState( defaulValues);
    // Actualiza el input en función de la modalidad
    const [game, setGame] = useState(null);
    // Calcula el precio del torneo
    const [calculatorPrice, setCalulatorPrice] = useState(null);
    // Pequeña verificación del input file y  actualiza los estados conrrespondientes al formulario de Crear Torneo
    const handleChangeForm = (e) => {
        if(e.target.classList[0]=== "CreateChampionShip-inputFile"){
            const docType = e.target.files[0].type;
            const validExtensions = ['image/jpeg','image/jpg','image/png']
            if(validExtensions.includes(docType)){
                // Archivo Valido
                const file = e.target.files[0]
                const reader = new FileReader();
                    reader.onloadend = () => {
                    useCrop.setPreViewSponsor(reader.result)
                    };
                    reader.readAsDataURL(file);
                    setValues({...values,Sponsor:true})
                    return
                }else{
                    // Archivo invalido
                    alert("No es un archivo invalido")
                    return
                }}
            else if(e.target.name === "PrecioInscripcion"||e.target.name === "Puntos" || e.target.name === "NRondas" ||e.target.name === "NJugadores"){
              // No Permitir al usuario ingresar cantidades negativas
              let PositiveNumber = Math.abs(Number(e.target.value));
              setValues({...values,[e.target.name]:PositiveNumber})
            }
            else(
                setValues({...values,[e.target.name]:e.target.value})
                )
    }
    // Aparte de actualizar el input en función de la modalidad y del tipo de juego,cada vez que cambie value verifica 
    useEffect(() => {
            switch (values.TypeGame) {
              // Determina primero el tipo de juego
              case "Domino":
                // Despues determina en que modalidad se jugara
                switch (values.Modalidad) {
                  case "Individual":
                    setGame(["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga"]);
                    setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                    break;
                  case "Parejas":
                    setGame(["Suizo","Eliminatorio","Liga"])
                    setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                    break;
                  case "Equipos":
                    setGame(["Sencillo","Completo"])
                    setValues({...values,ModalidadDentroDelTipo:"Sencillo"})
                    break;
                  default:
                    break;
                }
                break;
              case "Naipes":
                  switch (values.Modalidad) {
                      case "Individual":
                        setGame(
                          ["Eliminatorio(Mano A Mano)","Suizo(Mano A Mano)",
                          "Suizo(Mesa de 4)","Rotado(Mesa de 4)","Mixto rot-suiz(Mesa de 4)",
                          "Mixto suiz-tot(Mesa de 4)","Liga(Mesa de 4)"]
                        )
                        setValues({...values,ModalidadDentroDelTipo:"Eliminatorio(Mano A Mano)"})
                        break;
                      case "Parejas":
                          setGame(
                            ["Suizo","Eliminatorio","Liga"]
                          )
                          setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                        break;
                      case "Equipos":
                        setGame(
                          ["Sencillo","Completo"]
                        )
                        setValues({...values,ModalidadDentroDelTipo:"Sencillo"})
                        break;
                      default:
                        break;
                  }
                break;
              case "Otro":
                  setGame(
                    ["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga","Eliminatorio"]
                  )
                  setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                break;
              default:
                setGame(
                  ["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga","Eliminatorio"]
                )
                setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                break;
            }

        }, [values.TypeGame,values.Modalidad]);
    // Si los datos Numero de jugadores y Numero de rondas han variando, en función de ello determina el precio
    useEffect(() => {
        if(values.NJugadores === "" || values.NRondas === ""){return}
        else(
        setCalulatorPrice(Number(values.NRondas)*Number(values.NJugadores)*0.25)
        )
      }, [values.NJugadores,values.NRondas]);
    useEffect(() => {
      if(!user)return;
      const TCoding = new Date().valueOf();
      const ZoneTime = Intl.DateTimeFormat().resolvedOptions().timeZone
      setValues({...values,_id:user._id,TCoding,ZoneTime})
      const subURL = window.location.hash
      if(subURL === "#/create"|| subURL.includes("token") === false) return
      SetLoading(true)
      const cutStringToGetToken = subURL.split(/token=/)
      const token = cutStringToGetToken[1].split(/&/)[0]
      const PayerID = subURL.split(/PayerID=/i)[1]
      if(!token && !PayerID) {return}
      let config ={
        method: 'POST',
        body:JSON.stringify({token,PayerID}),
        headers:{"Content-Type": "application/json"}
      }
      const fetching = async(url)=>{
        try {
            const sending = await fetch(url,config)
            const data = await sending.json()
            if(error||data.status=== 422)throw(data.message || error)
            console.log(data)
            SetLoading(false)
            alert("Su torneo fue registrado de manera exitosa")
        } catch (err) {
            SetLoading(false)
            alert(err)
        }
    }
    fetching("/confirm-Pay")
    }, [user]);

  const handleSubmitNewT =(e) =>{
    e.preventDefault()
    if(values.Sponsor && !useCrop.result){
      alert("Selecciona y recorta la imagen de tu patrocinante para poder enviar")
      return
    }
    // Hacemos un clon del Estado
    const clonState = Object.assign({},values)
    const propsDelete = ['DireccionURL','Sponsor','Comentario']
    // Eliminamos las props del estado que no queremos verificar
    propsDelete.map(el => delete clonState[el])
    if([...Object.values(clonState)].includes("")===true){alert("Campos incompletos");return}
    const data = new FormData()
    data.append('document',JSON.stringify(values))
    if(values.Sponsor){
      const dateN = values.Fecha.replace(':','-')
      const Nfile = new File([useCrop.result],`${user.nickname+"-"+values.TCoding+"-"+dateN}.jpeg`,{type:"image/jpeg"})
      data.append('image',Nfile)
    }
    let config ={
      method: 'POST',
      body: data,
  }

  const fetching = async(url)=>{
      try {
          SetLoading(true)
          const sending = await fetch(url,config)
          const data = await sending.json()
          if(data.error === true || !data.href) throw data
          else {
            setError(false)
            alert("Re-direccionando con paypal")
            document.getElementById("CreateChampionShip-form").reset()
            setGame(["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga","Eliminatorio"])
            useCrop.setImage(null)
            useCrop.setPreViewSponsor(null)
            useCrop.setResult(null)
            useCrop.setCrop({aspect:1})
            setValues(defaulValues)
            window.open(data.href)
            SetLoading(false)
            }
          
      } catch (error) {
        SetLoading(false)
        alert(error)
      }

  }
  setTimeout(() => {
    fetching(`/add-torneo`)
  }, 1000);
  }
    return ( 
        <>
        {loading && <Loader/>}
        {user &&
            <div className="App-div-2">
                <HeaderOfChampionShip 
                values={values} 
                calculatorPrice={calculatorPrice} 
                sponsor={useCrop.preViewSponsor} 
                crop={useCrop.crop}
                setCrop={useCrop.setCrop}
                handleSendImg={useCrop.handleSendImg}
                setImage={useCrop.setImage}
                />
                <CreateChampionShip 
                game={game} 
                handleSubmitNewT={handleSubmitNewT}
                handleChangeForm={handleChangeForm}
                />
            </div>
        }
        </>
     );
}

export default CrearTorneo;