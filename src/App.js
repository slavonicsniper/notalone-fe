import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Confirmation from './components/Confirmation/Confirmation';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div className="container">
      <header>
      <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
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
