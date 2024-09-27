import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthSignIn, AuthSignOut, Dashboard, ErrorElement } from './components'
import './index.scss'

import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

import App from './App.tsx'
import { Authentication } from "./pages"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

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
        path: 'home',
        element: <Dashboard />,
        errorElement: <ErrorElement />,
      },
    ],
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
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <RouterProvider router={routes} />
    </ConvexProviderWithClerk>
  </ClerkProvider>
)
