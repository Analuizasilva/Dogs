import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Home from './Pages/Home/Home.tsx';
import Header from './Components/Header/Header.tsx';
import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx';
import Footer from './Components/Footer/Footer.tsx';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes> 
     <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
