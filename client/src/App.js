import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Account/Login';
import DataProvider from './contextApi/DataProvider';
import {Routes,Route, Navigate, Outlet} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import BlogCreate from './components/Blog/BlogCreate';

const PrivateRoute = () =>{
  let tok = sessionStorage.getItem("accessToken")
  return tok===null?<Navigate replace to="/login" />: <> <Header /> <Outlet/> </>;
}


function App() {
   
  
  return (
      <DataProvider>
        <div style={{marginTop:"64px "}}>
          <Routes>

            <Route path="/login" element={<Login/>} />

            <Route path="/" element={<PrivateRoute/>}>
              <Route path="/" element={<Home/>} />
            </Route>  
            <Route path="/create" element={<PrivateRoute/>}>
              <Route path="/create" element={<BlogCreate/>} />
            </Route>  
          
          </Routes>
        </div>
      </DataProvider>
  );
}

export default App;
