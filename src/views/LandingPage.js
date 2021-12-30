import React, { useContext } from 'react';
import NavLeftDomino from '../components/NavLeftDomino';
import NavLeftNaipes from '../components/NavLeftNaipes';
import NavLeftDeMesa from '../components/NavLeftDeMesa';
import MainBannerPrincipal from '../components/MainBannerPrincipal';
import '../App.css'
import '../components/NavLeft.css'
import { UserContext } from '../context/UserProvider';

function LandingPage() {
  const {user} = useContext(UserContext)
    return ( 
        <>
        <div className="App-div">
          <div className='App-div__div'>
            <NavLeftDomino user={user}/>
            <NavLeftNaipes user={user}/>
            <NavLeftDeMesa user={user}/>
          </div>
          <MainBannerPrincipal user={user}/>
        </div>
        </>
     );
}

export default LandingPage;