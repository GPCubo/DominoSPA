import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import './NavTop.css'
function NavTop() {
    const textContentNavUserNull=["MISTORNEOS.COM","INICIAR SECCIÓN","REGISTRO","HISTORICO","CONCTACTO"]
    const textContentLinkUserNull=["/","/iseccion","/registro","/historico","/contacto"]
    const textContentNav = ["MISTORNEOS.COM","CREAR TORNEOS","TORNEOS","HISTORICO","CONTACTO","SALIR"]
    const textContentLink = ["/","/create","/torneos","/historico","/contacto","/"]
    const {user,setUser} = useContext(UserContext)
    const toggleNav = (e) => {
        if(e.target.id === "NavTop-link5"){window.localStorage.removeItem("loggedNoteAppUser"); setUser(null)}
        document.getElementById("NavTop-inputCheckbox").click()
    }
    return ( 
        <>
        <nav className="NavTop-nav">
            <p className="NavTop-p">LOGO</p>
            <input type="checkbox" id="NavTop-inputCheckbox" className="NavTop-inputCheckbox" hidden={true} />
            <label htmlFor="NavTop-inputCheckbox" className="NavTop-label-close" ><img src="assets/svg/highlight_off_white_24dp.svg" alt="burger" className="NavTop-img"/></label>
            <label htmlFor="NavTop-inputCheckbox" className="NavTop-label" ><img src="assets/svg/menu_black_24dp.svg" alt="burger" className="NavTop-img"/></label>
            <ul className="NavTop-ul" id="NavTop-ul">
            {
                user === null ?
                textContentNavUserNull.map(
                    (el,index) => {
                        return ( 
                        <li htmlFor="NavTop-inputCheckbox" className={"NavTop-li"+index} key={index} >
                            <Link onClick={toggleNav} to={textContentLinkUserNull[index]} className="NavTop-link">{el}<span className="NavTop-span">🢓</span></Link>  
                        </li>)
                    }):
                textContentNav.map(
                    (el,index) => {
                        return ( 
                        <li className={"NavTop-li"+index} key={index} >
                            <Link onClick={toggleNav} to={textContentLink[index]} id={"NavTop-link"+index} className="NavTop-link">{el}<span className="NavTop-span">🢓</span></Link>  
                        </li>)
                    })
                }
            </ul>
        </nav>
        </>
     );
}

export default NavTop;