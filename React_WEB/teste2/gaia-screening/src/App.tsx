import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { Router as RemixRouter} from "@remix-run/router";

import './main.css';
import { loginRoutes } from './modules/login/routes';
import { GlobalProvider } from './shared/hooks/useGlobalContext';
import { homeRoutes } from "./modules/home/routes";
import { productRoutes } from "./modules/product/routes";


const router: RemixRouter = createBrowserRouter(
  [
    ...homeRoutes, 
    ...loginRoutes,
    ...productRoutes
  ]
);


function App() {
  return(
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
  
}
export default App
