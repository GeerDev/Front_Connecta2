import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/UI/Header/Header'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Home from './components/Home/Home'
import PostDetail from './components/PostDetail/PostDetail'
import Profile from './components/Profile/Profile'


import './App.css';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/postdetail" element={<PostDetail />} />
          <Route path="/profile" element={<Profile />} />   
      </Routes>
    </Router>
  );
}

export default App;