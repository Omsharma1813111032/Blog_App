import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Account/Login';
import DataProvider from './contextApi/DataProvider';


function App() {
  return (
    <div style={{marginTop:"64px "}}>
      <DataProvider>
        <Login />
      </DataProvider>
    </div>
  );
}

export default App;
