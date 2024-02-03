import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Account/Login';
import DataProvider from './contextApi/DataProvider';
import {Routes,Route, Navigate, Outlet} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useState } from 'react';

const PrivateRoute = ({isAuthenticated}) =>{
  return isAuthenticated ? <> <Header/> <Outlet/> </> : <Navigate replace to="/login" />
}


function App() {

  const [isAuthenticated,isUserAuthenticated] = useState(false)


  return (
      <DataProvider>
        <div style={{marginTop:"64px "}}>
          <Routes>
            <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/" element={<Home/>} />
            </Route>  
          
          </Routes>
        </div>
      </DataProvider>
  );
}

export default App;
