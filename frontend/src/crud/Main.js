import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";

import Listar from "./components/aluno/Listar";
import Editar from "./components/aluno/Editar";
import Criar from "./components/aluno/Criar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
            {
                path:"professor/listar",
                element:<Listar />
            },
            {
                path:"professor/criar",
                element:<Criar />
            },
            {
                path:"professor/editar",
                element:<Editar />
            }
        ]
    }
  ]);

const Main = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Main