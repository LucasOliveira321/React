import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { Router as RemixRouter} from "@remix-run/router";

import './main.css';
import { loginRoutes } from './modules/login/routes';

import { homeRoutes } from "./modules/home/routes";
import { productRoutes } from "./modules/product/routes";
import { useNotification } from "./shared/hooks/useNotification";


const router: RemixRouter = createBrowserRouter(
  [
    ...homeRoutes, 
    ...loginRoutes,
    ...productRoutes
  ]
);


function App() {
  const { contextHolder } = useNotification();
  return(
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
    
  );
  
}
export default App
