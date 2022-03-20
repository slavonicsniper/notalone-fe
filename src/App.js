import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
      <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
