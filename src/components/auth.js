import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

console.log("local : " + localStorage.userName)
const name= localStorage.userName

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(name)

  const login = user => {
    setUser(user)
  }

  const logout = () => {
    localStorage.userName=""
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
