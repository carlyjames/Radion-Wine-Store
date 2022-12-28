import React , { useState }from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { UseAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {

  const [error, setError] = useState()
  const history = useNavigate()
  const  { Logout } = UseAuth()



  async function handleLogout(params) {
    setError('')
    try {
       await Logout() 
       history('/login');
    } catch {
      setError('failed to sign out')
    }
  }

  let user = firebase.auth().currentUser;

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: {user.email}</strong> 
          <Link to="/forgot-password" className="btn btn-primary w-100 mt-3">
            Reset password
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <Link to='/update-profile' >Update Profile</Link>
      </div>
    </>
  )
}
