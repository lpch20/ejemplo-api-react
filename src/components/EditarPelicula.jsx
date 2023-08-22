import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function EditarPelicula() {
    const datosPeli = useLoaderData();
    const [nombre, setNombre] = useState("");
    const [director, setDirector] = useState("");
    const [clasificacion, setClasificacion] = useState("");
    const [id, setId] = useState("");
    const [formulario, setFormularioEnviado] = useState(false);
    const [error, setError] = useState(false);
    console.log(datosPeli)


    useEffect(()=>{
        const {id, nombre, director, clasificacion} = datosPeli?.pelicula || {};
        setId(id || 0)
        setNombre(nombre || "")
        setDirector(director || "")
        setClasificacion(clasificacion || "")
    },[datosPeli])

    const datosEnviar = {
        name: nombre,
        director: director,
        clasification: clasificacion,
        id: Number(id),
      };
    
      const requestOptions = {
        method: datosPeli?.pelicula? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosEnviar),
      };
    
      const handleSubmit = async (event) => {

       const url =  datosPeli?.pelicula? ("/" + datosPeli.pelicula.id) : '';
        try {
          event.preventDefault();
    
          const res = await fetch(
            "http://localhost:3000/peliculas" + url,
            requestOptions
          );
          const data = await res.json();
          if (res.ok) {
            setFormularioEnviado(true);
            setNombre("");
            setDirector("");
            setClasificacion("");
            setId("");
          } 
    
          //   .then((response) => {
          //     if (!response.ok) {
          //       throw new Error("Error al enviar el POST");
          //     }
          //     return response.json();
          //   })
          //   .then((data) => {
          //     console.log("Respuesta del servidor:", data);
          //     setNombre("");
          //     setDirector("");
          //     setClasificacion("");
          //     setId("");
          //   })
          //   .catch((error) => {
          //     console.error("Error:", error);
          //   });
        } catch {
    
            setError(true)
        }
      };
    
 
  return (
    <div>
    <form action="" method="post" onSubmit={handleSubmit}>
      <p>Nombre de la pelicula</p>
      <input
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        type="text"
      />
      <p>Nombre del director</p>
      <input
        value={director}
        onChange={(event) => setDirector(event.target.value)}
        type="text"
      />
      <p>Clasificacion de la pelicula</p>
      <input
        value={clasificacion}
        onChange={(event) => setClasificacion(event.target.value)}
        type="text"
      />
      <p>Id de la pelicula</p>
      <input
        value={id}
        onChange={(event) => setId(event.target.value)}
        type="number"
      />
      <button type="submit">Cargar Pelicula</button>

      {formulario && <p>Formulario enviado correctamente</p>}
      {error && <p>Sucedio un error, intente nuevamente</p>}
    </form>
  </div>
  )
}

export default EditarPelicula