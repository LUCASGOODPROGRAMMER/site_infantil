// hooks
import { StrictMode } from 'react'; // picolé
import { createRoot } from 'react-dom/client'; // raiz do react no dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // usado para configurar rotas

import './index.css';

// components
import App from './App.jsx';

// routes
import Search from './routes/Search.jsx';
import Cards from './routes/Cards.jsx';
import Atividades from './routes/Atividades.jsx';
import Quiz from './routes/Quiz.jsx';
import Material from './routes/Material.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import AddCard from './routes/AddCard.jsx';
import FocusCard from './routes/FocusCard.jsx';
import Login from './routes/Login.jsx';

// Configuração das rotas
const router = createBrowserRouter(
  [
    {
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Cards /> }, 
        { path: "/cards/addCard", element: <AddCard /> },
        { path: "/cards/:id", element: <FocusCard /> },
        { path: "/quiz", element: <Quiz /> },
        { path: "/atividades", element: <Atividades /> },
        { path: "/material", element: <Material /> },
        { path: "/search", element: <Search /> },
        { path: "/login", element: <Login/>}
      ],
    }
  ],
  {
    basename: "/site_infantil/",
  }
);

// Renderização do app


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
