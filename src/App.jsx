import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cargarimg from "./components/recursos/Cargarimg";
import Gestionprod from "./components/recursos/Gestionprod";
import Modificarbio from "./components/recursos/Modificarbio";
import Login from "./components/recursos/Login";

const router = createBrowserRouter([
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
      path: "/login",
      element: <Login />,
   }
]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
