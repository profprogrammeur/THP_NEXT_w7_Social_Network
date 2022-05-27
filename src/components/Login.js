import { useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const Login = () => {
  const [user, setUser] = useState("")
  // useEffect(()=>{localStorage.userName=user})
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    localStorage.setItem('userName', user);
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }
  return (
    <div>
      <label>
        Username: <input type='text' onChange={e => setUser(e.target.value)} />
      </label>{' '}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
