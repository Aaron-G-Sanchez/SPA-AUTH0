import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/LoginButton'

export const Home = () => {
  const { user } = useAuth0()

  if (user) {
    console.log(user)
  }

  return (
    <>
      <h1>Home</h1>
      <LoginButton />
    </>
  )
}
