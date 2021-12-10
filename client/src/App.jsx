import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import './Css/App.css'
import AcoeComp from './Components/acoeComponents/AcoeComp';


const App = ()=> {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} exact></Route>
          <Route path="/login" element={<Login/>} exact></Route>
          <Route path="/acoe" element={<AcoeComp/>} exact>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}
 
export default App;
