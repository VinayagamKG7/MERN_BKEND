
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Kids from './Pages/Kids'
import Men from './Pages/Men'
import Women from './Pages/Women'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
      </Routes>
    </>
  )
}

export default App