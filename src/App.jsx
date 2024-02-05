import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <div className="mt-32">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
