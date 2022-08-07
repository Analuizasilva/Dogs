import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Header from './Components/Header/Header.tsx';
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
