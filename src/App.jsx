import { Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/home'
import Error from './components/error'
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/admin/dashboard"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        {/* <Route path="/auth/register" element={<Register/>}/> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
