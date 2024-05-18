import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import type { Router as RemixRouter} from "@remix-run/router";

import './main.css';
import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    errorElement: <div>Pagina nao encontrada</div>
  }
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
