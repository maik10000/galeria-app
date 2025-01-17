import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useSelector } from 'react-redux'
import Home from './pages/views/Home';

function App() {
  const user = useSelector((estado)=> estado.user);
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default App
