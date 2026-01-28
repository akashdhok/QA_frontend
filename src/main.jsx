import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
<GoogleOAuthProvider clientId="273417550565-gt7n6ofdchkd5p24r68qljt6c23f6tnq.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>
    </BrowserRouter>
 
)
