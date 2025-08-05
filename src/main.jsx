import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


import "./index.css";
import App from "./App.jsx";

// routes
import ErrorPage from './routes/ErrorPage.jsx'
import Home from "./routes/Home.jsx";


//roteador
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
     
        {
          path: "teste",
          element: <Navigate to="/" />
        }
      ],
    },
  ],
  {
    basename: "/site_infantil",
  }
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/** RouterProvider Serve para ativar o sistema de rotas na aplicação React com o roteador que foi criado. */}
    <RouterProvider router={router} />
  </StrictMode>
);
