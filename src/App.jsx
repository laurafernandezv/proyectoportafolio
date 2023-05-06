import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cargarimg from "./components/recursos/Cargarimg";
import Gestionprod from "./components/recursos/Gestionprod";
import Modificarbio from "./components/recursos/Modificarbio";
import Bio from './componentes/Bio'
import Contacto from './componentes/Contacto'
import Produccion1 from './componentes/Produccion1'
import Produccion2 from './componentes/Produccion2'
import Produccion3 from './componentes/Produccion3'
import Produccion4 from './componentes/Produccion4'
import Produccion5 from './componentes/Produccion5'
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
   },//*INICIA VISTA DE MENU NAVEGACION*//
    {
      path: '/bio',
      element: <Bio />,
      errorElement: <h1>El elemento no existe</h1>
    }, 
    {
      path: '/contacto',
      element: <Contacto />,
      errorElement: <h1>El elemento no existe</h1>
    },
    {
      path: '/produccion1',
      element: <Produccion1 />,
      errorElement: <h1>El elemento no existe</h1>
    },
    {
      path: '/produccion2',
      element: <Produccion2 />,
      errorElement: <h1>El elemento no existe</h1>
    },
    {
      path: '/produccion3',
      element: <Produccion3 />,
      errorElement: <h1>El elemento no existe</h1>
    },
    {
      path: '/produccion4',
      element: <Produccion4 />,
      errorElement: <h1>El elemento no existe</h1>
    },
    {
      path: '/produccion5',
      element: <Produccion5 />,
      errorElement: <h1>El elemento no existe</h1>
    }

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
