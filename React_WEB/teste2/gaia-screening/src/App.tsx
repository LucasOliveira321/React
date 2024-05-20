import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import type { Router as RemixRouter} from "@remix-run/router";

import './main.css';
import { loginRoutes } from './modules/login/routes';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

const mainRoutes: RouteObject[] = [
  {
    errorElement: <div>Pagina nao encontrada</div>
  }
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);


function App() {
  return(
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
  
}
export default App
