import React from 'react'
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';//topbar/Topbar
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './components/header/Header';


function App() {
  const user = false;
  return (
    <Router>
      <Topbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home/>:<Register />} />
          <Route path="/login" element={user ? <Home/>:<Login />} />
          <Route path="/write" element={user ? <Write/>:<Register />} />
          <Route path="/settings" element={user ? <Settings/>:<Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
    </Router>
    
  );
}

export default App;