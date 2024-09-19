import { Outlet } from "react-router-dom";

export default function App() {
  return (
      <>
        <header>
          <h1>Navbar</h1>
        </header>
        
        <main>
          <Outlet />
        </main>
        
        <footer>
          <h2>footer</h2>
        </footer>
      </>
  )
}
