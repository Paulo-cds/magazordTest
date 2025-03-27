import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/:user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
