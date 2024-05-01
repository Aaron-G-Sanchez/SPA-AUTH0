import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  console.log(children)
  const { isAuthenticated } = useAuth0()

  console.log(isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/login" replace />
}
