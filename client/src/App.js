import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Account/Login';
import DataProvider from './contextApi/DataProvider';
import {Routes,Route, Navigate, Outlet} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const TestRoute = () =>{
  let tok = sessionStorage.getItem("accessToken")
  // console.log(tok)
  return tok===null?<Navigate replace to="/login" />: <> <Header /> <Outlet/> </>;

}

function App() {
   
  
  return (
      <DataProvider>
        <div style={{marginTop:"64px "}}>
          <Routes>

            <Route path="/login" element={<Login/>} />

            <Route path="/" element={<TestRoute/>}>
              <Route path="/" element={<Home/>} />
            </Route>  
          
          </Routes>
        </div>
      </DataProvider>
  );
}

export default App;
