import React, {useState} from 'react';
import Router from './components/Router'; 

import './App.css';

function App() {

  const [status, setStatus] = useState(null); 

  function login(user){
    setStatus(user); 
  }

  function logout(){
    setStatus(null); 
  }

  return (
        <AppContext.Provider value={status}>
          <LoginContext.Provider value={login}>
            <LogoutContext.Provider value={logout}>
              <Router />
            </LogoutContext.Provider>
          </LoginContext.Provider>
        </AppContext.Provider>
  );
}

export const AppContext = React.createContext(); 
export const LoginContext = React.createContext(); 
export const LogoutContext = React.createContext(); 

export default App;
