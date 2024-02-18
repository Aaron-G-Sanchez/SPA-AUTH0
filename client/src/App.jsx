import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <div className="hello-world">
        <h1>Hello World</h1>
        <div className="nav">
          <LoginButton />
          <LogoutButton />
        </div>
        <div className="profile">
          <Profile />
        </div>
      </div>
    </>
  )
}

export default App
