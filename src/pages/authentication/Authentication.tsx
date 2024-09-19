import { Outlet } from "react-router-dom";

export default function Authentication() {
  return (
    <div>
        <header>
            <h1>auth page</h1>
        </header>
        <Outlet />
    </div>
  )
}
