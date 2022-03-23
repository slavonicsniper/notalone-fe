import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='main-login'>
      {/* {loggedIn ? <Navigate to='/login'/> : <Dashboard/>} */}
      
    </div>
  )
}

export default Dashboard;
