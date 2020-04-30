import React, {useState} from 'react';
import Router from './components/Router'; 

import './App.css';

function App() {

  const [status, setStatus] = useState(null); 
  const [postId, setPostID] = useState(null); 

  function setPost(id){
    setPostID(id); 
  }

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
              <PostContext.Provider value={setPostID}>
                <PostIDContext.Provider value={postId}>
                  <Router />
                </PostIDContext.Provider>
              </PostContext.Provider>
            </LogoutContext.Provider>
          </LoginContext.Provider>
        </AppContext.Provider>
  );
}

export const AppContext = React.createContext(); 
export const LoginContext = React.createContext(); 
export const LogoutContext = React.createContext(); 
export const PostContext = React.createContext(); 
export const PostIDContext = React.createContext(); 

export default App;
