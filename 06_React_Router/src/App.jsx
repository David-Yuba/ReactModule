import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NavBar from "./components/Navbar"
import UserProfile from "./pages/userProfile"
import Dashboard from "./pages/Dashboard"
import Layout from "./Layout"
import './App.css'
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/user/:id" element={<UserProfile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
