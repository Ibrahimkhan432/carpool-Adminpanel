import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext.jsx'
import Router from './Route.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
<BrowserRouter>
    <Router/>
     </BrowserRouter>
    </AuthContextProvider>
   
)
