import {Routes,Route} from 'react-router-dom'


import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Personajes from './pages/Personajes';
import About from './pages/About';
import "./App.css"




function App() {


  return (
    <div className='app'>
    <Navbar/>
     <Routes>
      <Route path='/' exact element={<Welcome/>} />
      <Route path='/characters' element={<Personajes/>}/>
      <Route path='/about' element={<About/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
