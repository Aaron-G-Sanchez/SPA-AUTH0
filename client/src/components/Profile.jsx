import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const [userMetadata, setUserMetadata] = useState(null)

  const getUserMetadata = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:3001',
          scope: 'read:users'
        }
      })

      const userTest = `http://localhost:3001/users`

      const userTestResponse = await fetch(userTest, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const body = await userTestResponse.json()

      console.log('clicked')
      console.log(body)

      setUserMetadata(body)
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
        <button onClick={onClick}>Get Metadata</button>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          'No user metadata defined'
        )}
      </div>
    )
  )
}

export default Profile
