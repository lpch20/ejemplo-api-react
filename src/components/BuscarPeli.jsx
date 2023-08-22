import React, { useState } from "react";


function BuscarPeli() {
  const [pelicula, setPelicula] = useState(null);
  const [id, setId] = useState("");
  const [formulario, setFormularioEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [nuevoNombre, setNombre] = useState("");
  const [nuevoDirector, setDirector] = useState("");
  const [nuevaClasificacion, setClasificacion] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/peliculas/${id}`);
      const data = await res.json();

      if (res.ok) {
        setFormularioEnviado(true);
        setPelicula(data);
        setError(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const modificar = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nuevoNombre,
        director: nuevoDirector,
        clasificacion: nuevaClasificacion,
      }),
    };
    try {
      const res = await fetch(`http://localhost:3000/peliculas/${id}`, requestOptions);

      if (res.ok) {
        setFormularioEnviado(true);
        setError(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Cargar película por ID</p>
          <input
            value={id}
            onChange={(event) => setId(event.target.value)}
            type="number"
          />
          <button type="submit">Cargar Película</button>
        </form>
      </div>
      <div>
        {pelicula && (
          <div>
            <h2>Su película</h2>
            <p>Titulo: {pelicula.name || pelicula.nombre}</p>
            <p>Director: {pelicula.director}</p>
            <p>Clasificacion: {pelicula.clasification || pelicula.clasificacion}</p>
            <form onSubmit={modificar}>
              <div>
                <h2>Modificar Película</h2>
                <p>Nombre de la pelicula</p>
                <input
                  value={nuevoNombre}
                  onChange={(event) => setNombre(event.target.value)}
                  type="text"
                />
                <p>Nombre del director</p>
                <input
                  value={nuevoDirector}
                  onChange={(event) => setDirector(event.target.value)}
                  type="text"
                />
                <p>Clasificación de la pelicula</p>
                <input
                  value={nuevaClasificacion}
                  onChange={(event) => setClasificacion(event.target.value)}
                  type="text"
                />
                <button type="submit">Modificar Película</button>

                {/* {formulario && <p>Pelicula modificada correctamente</p>}
                {error && <p>Sucedió un error, intente nuevamente</p>} */}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuscarPeli;
