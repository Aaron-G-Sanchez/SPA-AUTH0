import { SocketDemo } from '../components/socket-demo/SocketDemo'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'

export const Dash = () => {
  return (
    <>
      <div className="hello-world">
        <h1>Hello World</h1>
        <div className="nav">
          <LogoutButton />
        </div>
        <div className="profile">
          <Profile />
        </div>
      </div>
      <SocketDemo />
    </>
  )
}
