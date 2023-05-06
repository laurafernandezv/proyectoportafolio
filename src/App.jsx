import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cargarimg from "./components/recursos/Cargarimg";
import Gestionprod from "./components/recursos/Gestionprod";
import Modificarbio from "./components/recursos/Modificarbio";
import Main from "./components/Main";
import Contacto from "./components/recursos/Contacto"
import Login from "./components/recursos/Login"


const router = createBrowserRouter([

   {
      path: "/",
      element: <Main />,
      errorElement: <h1>Pagina no encontrada</h1>

   },
   {
      path: "/upload",
      element: <Cargarimg />,
      errorElement: <h1>Pagina no encontrada</h1>
   },
   {
      path: "/gestion",
      element: <Gestionprod />,
      errorElement: <h1>Pagina no encontrada</h1>
   },
   {
      path: "/modificarbio",
      element: <Modificarbio />,
      errorElement: <h1>Pagina no encontrada</h1>
   },

   {
      path: "/contacto",
      element: <Contacto />,
      errorElement: <h1>Pagina no encontrada</h1>
   },

   {
      path: "/login",
      element: <Login />,
      errorElement: <h1>Pagina no encontrada</h1>
   },

]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
