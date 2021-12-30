import { Link } from 'react-router-dom';
export const LoginTemplate = ({handleChange,handleSubmit,user}) => {
    return (
        <div className="login-pre-div">
            <div className="login-div">
                <div className="login-welcome-page">
                    <p className="login-title">Welcome Page</p>
                    <p className="login-p-sign" id="login-p-sign">Sign In To Your Account</p>
                </div>
                <div className="login-pre-form">
                    <p className="login-p-hello">Hello!</p>
                    <p className="login-p-gm">Good Morning</p>
                    <p className="login-p-login">
                        <span className="login-p-login-span" id="login-p-login-span">Login </span>
                        Your Account</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="login-label"></label>
                        <input className="login-input-1" type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                        <label htmlFor="password"className="login-label"></label>
                        <input className="login-input-1" type="password" placeholder="Password" name="password" onChange={handleChange} />
                        <div className="login-form-div">
                            <input type="checkbox" name="remember" id="login-label-remember"/>
                            <label htmlFor="login-label-remember" className="login-label-remember">Remember</label>
                            <a href="/contacto" className="login-a-forgot" >Forgot Password?</a>
                        </div>
                        <label htmlFor="submit" className="login-label-submit" >SUBMIT</label> 
                        <input name="submit" id="submit" type="submit" hidden={true} />
                        <Link className="login-p-create-ac" id="login-p-create-ac" to={user === null ? "/registro" :"/create"}>Create Account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
