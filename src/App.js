import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useState} from 'react'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Confirmation from './components/Confirmation/Confirmation';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(`loggedIn: ${loggedIn}`)
  const handleLogin = isAuthenticated => setLoggedIn(isAuthenticated)

  const [data, setData] = useState({})

  const handleData = data => setData(data)

  return (
    <div className="container">
      <header>
      <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={loggedIn ? <Dashboard userData={data}/> : <Navigate replace to="/login" />}/>
            <Route path="/login" element={loggedIn ? <Navigate replace to="/" /> : <Login handleLogin={handleLogin} handleData={handleData}/>}/>              
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgotPassword" element={<ForgotPassword/>}/>
            <Route path="/confirm/:confirmationCode" element={<Confirmation/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
