import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

export default function App() {
  return (
      <>
        <Navbar />
        
        <main>
          <Outlet />
        </main>
        
        <footer>
          <h2>footer</h2>
        </footer>
      </>
  )
}
