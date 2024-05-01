import './App.css'
import { Dash } from './pages/Dash'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  console.log(isAuthenticated)

  if (isLoading) {
    return (
      <>
        <p>Loading....</p>
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/dash"
          element={
            <ProtectedRoute isAuthenticate={isAuthenticated}>
              <Dash />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
