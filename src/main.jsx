import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Admin from "./components/admin";
import BorrarPelicula from "./components/BorrarPelicula";
import AgregarPelicula from "./components/AgregarPelicula";
import BuscarPeli from "./components/BuscarPeli";
import { LoaderEditarPelicula } from "./components/LoaderEditarPelicula";
import EditarPelicula from "./components/EditarPelicula";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Admin></Admin>,
  },
  {
    path: "/agregarPeli",
    element: <AgregarPelicula></AgregarPelicula>,
  },
  {
    path: "/borrarPeli",
    element: <BorrarPelicula></BorrarPelicula>,
  },
  {
    path: "/editarPeli/:id",
    element: <EditarPelicula></EditarPelicula>,
    loader: LoaderEditarPelicula
  },
  {
    path: "/buscarPeli",
    element: <BuscarPeli></BuscarPeli>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);