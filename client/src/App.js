import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Account/Login';
import {Routes,Route, Navigate, Outlet} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import BlogCreate from './components/Blog/BlogCreate';
import Detail from './singleBlog/Detail';
import BlogEdit from './components/Blog/BlogEdit1';

const PrivateRoute = () =>{
  let tok = sessionStorage.getItem("accessToken")
  return tok===null?<Navigate replace to="/login" />: <> <Header /> <Outlet/> </>;
}


function App() {
   
  
  return (
        <div style={{marginTop:"64px "}}>
          <Routes>

            <Route path="/login" element={<Login/>} />

            <Route path="/" element={<PrivateRoute/>}>
              <Route path="/" element={<Home/>} />
            </Route>  
            <Route path="/create" element={<PrivateRoute/>}>
              <Route path="/create" element={<BlogCreate/>} />
            </Route>

            <Route path="/blog/:id" element={<PrivateRoute/>}>
              <Route path="/blog/:id" element={<Detail/>} />
            </Route>  

            <Route path="/blog/edit/:id" element={<PrivateRoute/>}>
              <Route path="/blog/edit/:id" element={<BlogEdit/>} />
            </Route>  
          
          </Routes>
        </div>
  );
}

export default App;
