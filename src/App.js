
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Footer } from './components/Footer';
import Error from './components/errorpage';
import Logout from './components/Logout';
import Admin from './components/Admin';
import Users from './components/Users';
import Contacts from './components/Contacts';
import Services from './components/Services';

const App = () => {
  return (
    <div className="App">
      <div className='App_sec'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<Admin/>} >
          <Route path='users' element={<Users/>} />
          <Route path='contacts' element={<Contacts/>} />
          <Route path='services' element={<Services/>} />
         </Route>
          <Route path='/*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
      </div>
      <div className='foot'>
      <Footer/>
      </div>
    </div>

  );
}

export default App;
