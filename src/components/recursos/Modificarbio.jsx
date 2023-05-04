import Nav from "../helpers/Nav";

const Modificarbio = () => {
   return (
      <section className="panel-container">
         <Nav />
         <section className="panel">
            <div className="vista-previa">
               <h1>Aqui va la imagen</h1>
               <input type="file" className="cargar" accept="image/*" />
               <button>Modificar Imagenes</button>
            </div>
            <div className="vista-previa">
               <h1>Aqui va la descripción actual</h1>
               <textarea name="" id="" cols="30" rows="10">
                  Ingrese el nuevo texto de biografía
               </textarea>
               <button>Modificar Biografia</button>
            </div>
         </section>
      </section>
   );
};

export default Modificarbio;
