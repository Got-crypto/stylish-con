import { SignedIn, SignedOut } from "@clerk/clerk-react"
import { Suspense } from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function App() {
  return (
    <main>
      <header>
        <h1>Navbar</h1>
      </header>

      <Suspense fallback={<p>Loading ...</p>}>
        <SignedIn>
          <Outlet />
        </SignedIn>

        <SignedOut>
          <Navigate to={"/auth/signin"} />
        </SignedOut>
      </Suspense>

      <footer>
        <h2>footer</h2>
      </footer>
    </main>
  )
}
