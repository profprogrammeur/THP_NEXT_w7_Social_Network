import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export const Profile = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      <h3>HOLA !</h3><h4>{auth.user}</h4> <br></br><button onClick={handleLogout}>Logout</button>
    </div>
  )
}
