import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home';
import Signup from './components/Authentication/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgotPassword';
import UpdateProfile from './components/Authentication/UpdateProfile';

// import { Container,  } from 'react-bootstrap';
import AuthProvider from './contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
        <>
          <div >
            <Routes>
              <Route exact path='/' element={<Home />}  />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/update-profile' element={<UpdateProfile />} />
            </Routes>
          </div>
        </>
      </AuthProvider>
  );
}

export default App;
