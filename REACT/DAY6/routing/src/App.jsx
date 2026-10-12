
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home' ;
import Contact from './components/Contact';
import About from './components/About' ;


const App = () => {
  return (
    <>
      <NavBar / >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
} 

export default App ;