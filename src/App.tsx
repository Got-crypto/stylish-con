import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components";

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/home")
  }, [])
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
