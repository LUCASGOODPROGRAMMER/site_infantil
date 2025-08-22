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
import AdicionarCards from './routes/AdicionarCards.jsx';
import FocusCard from './routes/FocusCard.jsx';
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx'
import GerenciarCards from './routes/GerenciarCards.jsx';
import ExibirCards from './routes/ExibirCards.jsx';
import EditarCards from './routes/EditarCards.jsx';

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",           // rota raiz
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",       // Home como layout
        element: <Home />,
        children: [
          { index: true, element: <Cards /> },      
          { path: "cards/:id", element: <FocusCard /> }, 
          { path: "quiz", element: <Quiz /> },       
          { path: "atividades", element: <Atividades /> }, 
          { path: "material", element: <Material /> }, 
          { path: "search", element: <Search /> }, 
        ],
      },
      { path: "login", element: <Login /> }, // rota fora do layout Home
      {
        path: "GerenciarCards",
        element: <GerenciarCards />,
        children: [
          { index: true, element: <ExibirCards/>},
          { path: "adicionarCards", element: <AdicionarCards /> },
          { path: "editarCards/:id", element: <EditarCards/>}
        ]
      }
    ],
  },
], { basename: "/site_infantil/" });



// Renderização do app


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
