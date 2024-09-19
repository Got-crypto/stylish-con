import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthSignIn, AuthSignOut, ErrorElement } from './components'
import './index.scss'

import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import { Authentication } from "./pages"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!publishableKey) {
  throw new Error("missing publishable key");
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'first',
        element: <p>First Element</p>,
        errorElement: <ErrorElement />
      },
      {
        path: 'second',
        element: <p>Second Element</p>,
        errorElement: <ErrorElement />
      }
    ]
  },
  {
    path: 'auth',
    element: <Authentication />,
    errorElement: <ErrorElement />,
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
])

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={publishableKey}>
    <RouterProvider router={routes} />
  </ClerkProvider>
)
