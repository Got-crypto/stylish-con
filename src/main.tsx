import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthSignIn, AuthSignOut, ErrorElement } from './components'
import './index.scss'

import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import { About, Authentication } from "./pages"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!publishableKey) {
  console.error("Publishable key not found")
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'first',
        element: <p>First Element</p>
      },
      {
        path: 'second',
        element: <p>Second Element</p>
      }
    ]
  },
  {
    path: 'auth',
    element: <Authentication />,
    children: [
      {
        path: 'signin',
        element: <AuthSignIn />,
      },
      {
        path: 'signout',
        element: <AuthSignOut />,
      }
    ]
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorElement />
  }
])

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={publishableKey}>
    <RouterProvider router={routes} />
  </ClerkProvider>
)
