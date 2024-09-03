import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <main>
      <header>
        <h1>Navbar</h1>
      </header>
      <Outlet />
      <footer>
        <h2>footer</h2>
      </footer>
    </main>
  )
}
