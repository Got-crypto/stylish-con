import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "./components";

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
        
        <Footer />
      </>
  )
}
