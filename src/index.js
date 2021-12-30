import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import CrearTorneo from './views/CrearTorneo';
import LandingPage from './views/LandingPage';
import UserProvider from './context/UserProvider'
import TorneosActivos from './views/TorneosActivos';
import Registrarse from './views/Registrarse';
import ISeccion from './views/ISeccion';
import Contacto from './views/Contacto';
import Historico from './views/Historico';
import Torneo  from './views/Torneo';

ReactDOM.render(

    <HashRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="iseccion" element={<ISeccion/>}/>
          <Route path="create" element={<CrearTorneo/>} />
          <Route path="torneos" element={<TorneosActivos/>}/>
          <Route path="registro" element={<Registrarse/>} />
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="historico" element={<Historico/>} />
          <Route path="torneo/:_idT" element={<Torneo/>}/>
        </Route>
      </Routes>
    </UserProvider>
    </HashRouter>,
  document.getElementById('root')
);