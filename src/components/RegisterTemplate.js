import { constCountries } from '../ctte/constContries';
import { constPreNumbers } from '../ctte/constPreNumbers';
import { RegisterMapOptions } from './RegisterMapOptions';

export const RegisterTemplate = ({handleChangeFormRegister,handleSubmit}) => {
    return (
        <div>
        <h1 className="Register-h1">Registrate</h1>
        <p className="Register-h1">¡ÚNETE AHORA!</p>
        <form className="Register-form" onSubmit={handleSubmit}>
            <div className="Register-div-1">
                <div className="Register-div">
                    <input onChange={handleChangeFormRegister} className="Register-input" type="text" name="nickname" placeholder="Username"/>
                    <input onChange={handleChangeFormRegister} className="Register-input" type="email" name="email" placeholder="Correo"/>
                    <p className="Register-p-gender">Fecha de nacimiento</p>
                    <input onChange={handleChangeFormRegister} className="Register-input" type="date" name="birthday" placeholder="Cumpleaños"/>
                </div>
                <div className="Register-div">
                    <input onChange={handleChangeFormRegister} className="Register-input" type="password" name="password" placeholder="Contraseña"/>   
                    <input onChange={handleChangeFormRegister} className="Register-input" type="password" name="passwordCheck" placeholder="Repita su contraseña"/>
                    <p className="Register-p-gender">Genero</p>
                    <div className="Reigster-div-gender">
                        <img src="assets/svg/man_black_24dp.svg" alt="man-icon"/>
                        <input onChange={handleChangeFormRegister} type="radio" name="gender"  defaultValue="Hombre"/>
                        <img src="assets/svg/woman_black_24dp.svg" alt="man-icon"/>
                        <input onChange={handleChangeFormRegister} type="radio" name="gender"  defaultValue="Mujer"/>
                    </div>
                </div>
            </div>
            <p className="Register-p-gender">Telefono</p>
            <div className="Register-divSelect">
                <RegisterMapOptions arrayStrings={["Register-select-pre","prefijo"]} 
                handleChangeFormRegister={handleChangeFormRegister}  Map={constPreNumbers}/>
                <input onChange={handleChangeFormRegister} type="number" name="phone" className="Register-input"/>
            </div>
            <p className="Register-p-gender">Pais residente</p>
            <div>
                <RegisterMapOptions arrayStrings={["Register-select","country"]} 
                handleChangeFormRegister={handleChangeFormRegister}  Map={constCountries}/>
            </div>
            <div className="Register-div-margintop">
                <input onChange={handleChangeFormRegister} name="notifications" type="checkbox" id="Register-notifications-checkbox"/>
                <label htmlFor="Register-notifications-checkbox">Recibir notificaciones</label>
            </div>
            <div>
                <input onChange={handleChangeFormRegister} type="checkbox" id="Register-coditions-checkbox" name="coditions"/>
                <a rel="noreferrer" className="Register-link" target="_blank" href="https://plantillaterminosycondicionestiendaonline.com/" >Acepto los Términos y Condiciones</a>
            </div>
            <input className="Register-input-submit" type="submit" />
        </form>
    </div>
    )
}
