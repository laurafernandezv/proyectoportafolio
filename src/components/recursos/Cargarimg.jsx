import React from "react";
import Nav from "../helpers/Nav";

const Cargarimg = () => {
   return (
      <section className="panel-container">
         <Nav />
         <section className="panel">
            <section className="panel-carga">
               <input className="input" type="file"  accept="image/*" />
            </section>
            <section className="vista-previa">
               <div>
                  vista previa imagenes
               </div>
               <input className="input" type="text" placeholder="Nombre producción fotografica" />
               <textarea className="input"
                  cols="30"
                  rows="10"
                  placeholder="Agregar descripción de la producción fotografica"></textarea>
               <button className="guardar">Guardar Producción fotografica</button>
            </section>
            <section className="panel-categoria">
               <select  className="input" name="" id="">
                  <option value="gastronomia">Gastronomía</option>
                  <option value="arquitectura">Arquitectura</option>
               </select>
               <input className="input" type="button" value="Guardar Categoria" />
            </section>
         </section>
      </section>
   );
};

export default Cargarimg;
