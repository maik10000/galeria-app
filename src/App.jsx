import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useSelector } from 'react-redux'
import Home from './pages/views/Home';
import Auth from './pages/components/Auth';
import Perfil from './pages/views/Perfil';
import Registro from './pages/views/Registro';
import NavPerfil from './pages/components/NavPrefil';
import Galeria from './pages/views/Galeria';

function App() {
  const user = useSelector((estado)=> estado.user);
  return (
    <div>
      {
        user.token?<NavPerfil />: undefined
      }
      <Routes>
          <Route path='/' element={<Auth type="no-auth"> <Home /></Auth>}/>
          <Route path='/perfil' >
              <Route path='/perfil/:username' element={<Auth type="auth"><Perfil /></Auth>}/>
              <Route path='/perfil/galeria/:username' element={<Auth type="auth"><Galeria /></Auth>} />
          </Route>
          <Route path='/registro' element={<Auth type="no-auth"><Registro /></Auth>} />
      </Routes>
    </div>
  )
}

export default App
