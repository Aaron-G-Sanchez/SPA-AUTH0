import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain="dev-xruzhjvnyy8fokqt.us.auth0.com"
    clientId="Q4MH68SeRDhPeiD6jjA8I5VAMtX7IB88"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/dash',
      audience: 'http://localhost:3001'
      // Don't know for sure what scope does but uhhhhh this gets the user data to show
      // scope: 'read:current_user'
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)
