import { createContext,useState,useEffect} from "react";

export const UserContext = createContext()

function UserProvider({children}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedNoteAppUser")
    if(loggedUser){
      const parseUser = JSON.parse(loggedUser)
      setUser(parseUser)
    }
  }, []);
    return ( 
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
     );
}

export default UserProvider;