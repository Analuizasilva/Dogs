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
import Body from './Components/Body/Body';

function App() {
  return (
     <div className="App">
      <Header />
      <Body/>
      <Footer />
    </div>
   
  );
}

export default App;
