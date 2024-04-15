import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const [respone, setResponse] = useState(null)

  const getUserMetadata = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:3001',
          scope: 'read:current_user'
        }
      })

      const customHeaders = {
        'X-Custom-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          id: user.sub
        })
      }

      const userTest = `http://localhost:3001/users`

      const userTestResponse = await fetch(userTest, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...customHeaders
        }
      })
      const body = await userTestResponse.json()

      console.log('clicked')
      console.log(body)

      setResponse(body)
    } catch (e) {
      console.log(e.message)
    }
  }

  const onClick = async () => {
    await getUserMetadata()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        <button onClick={onClick}>Hit the server!</button>
        {respone ? (
          <pre>{JSON.stringify(respone.msg, null, 2)}</pre>
        ) : (
          'Server request not sent yet'
        )}
      </div>
    )
  )
}

export default Profile
