import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorElement from './components/ErrorElement.tsx'
import './index.scss'

import App from './App.tsx'
import { About } from "./pages"

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
    path: '/about',
    element: <About />,
    errorElement: <ErrorElement />
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
)
