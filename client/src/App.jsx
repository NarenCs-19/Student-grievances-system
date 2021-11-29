import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import './Css/App.css'

const App = ()=> {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} exact>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}
 
export default App;
