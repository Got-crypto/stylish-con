import { useRouteError } from "react-router-dom";

import "./error-boundary.scss";

interface RouteError {
  error: {
    message: string | null;
    stack: string;
  };
  status: number;
  statusText: string;
}

export default function ErrorElement() {
  const routeError = useRouteError() as RouteError
  console.error(routeError);
  
  return (
    <div className="error-boundary">
      <h1>{`${routeError?.status}: ${routeError?.statusText}`}</h1>
      <p>{routeError?.error?.message}</p>
    </div>
  )
}
