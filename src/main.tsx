import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './Components/Home/Home.tsx'
// Assuming you have these components in the Components folder
// import LoginPage from './Components/Login/Login.tsx'
// import SignupPage from './Components/Signup/Signup.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/login',
      //   element: <LoginPage />,
      // },
      // {
      //   path: '/signup',
      //   element: <SignupPage />,
      // },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
