import React from "react";
import Nav from "../helpers/Nav";

const Cargarimg = () => {
   return (
      <section className="panel-container">
         <Nav />
         <section className="panel">
            <section className="panel-carga">
               <input type="file" className="cargar" accept="image/*" />
            </section>
            <section className="vista-previa">
               <div>
                  vista previa imagenes
               </div>
               <input type="text" placeholder="Nombre producción fotografica" />
               <textarea
                  cols="30"
                  rows="10"
                  placeholder="Agregar descripción de la producción fotografica"></textarea>
               <button>Guardar Producción fotografica</button>
            </section>
            <section className="panel-categoria">
               <select name="" id="">
                  <option value="gastronomia">Gastronomía</option>
                  <option value="arquitectura">Arquitectura</option>
               </select>
               <input type="button" value="Guardar Categoria" />
            </section>
         </section>
      </section>
   );
};

export default Cargarimg;
