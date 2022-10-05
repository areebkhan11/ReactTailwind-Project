import './App.css';
import Router, {unAuthRoute} from './routes/Routes';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { loginUser } from './redux/user/action';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(({UserReducer}) => UserReducer);

  var authenticate = localStorage.getItem("authenticate");
  
  useEffect(()=>{
    if ( authenticate == "true" ){
      dispatch(loginUser(true))
    } 
  },[])
  const routhing = useRoutes(user.authenticate ?  Router  : unAuthRoute )
  
  return (
    
    
        <div className="App">
           {routhing}
        </div>

  );
}

export default App;
