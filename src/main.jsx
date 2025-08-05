import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

// Páginas
import App from './App.jsx';
import Cards from './routes/Cards.jsx';
import Atividades from './routes/Atividades.jsx';
import Quiz from './routes/Quiz.jsx';
import Material from './components/Material.jsx';
import Login from './Login.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "cards", element: <Cards /> },
      { path: "quiz", element: <Quiz /> },
      { path: "atividades", element: <Atividades /> },
      { path: "material", element: <Material /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
],
  {
    basename: "/site_infantil/", // <--- isso é essencial!);
  }

);
// Renderização do app


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
