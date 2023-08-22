import React, { useState } from "react";

function BorrarPelicula() {
  const [elId, setId] = useState("");
  const [formulario, setFormularioEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(
        `http://localhost:3000/peliculas/${elId}`,
        requestOptions
      );

      if (res.ok) {
        setFormularioEnviado(true);
        setError(false);
        setId("")
      } else {
        setError(true);
        setFormularioEnviado(false);
      }
    } catch (error) {
      setError(true);
      setFormularioEnviado(false);
    }
  };
  return (
    <div>
      <div>
        <form action="" method="delete" onSubmit={handleSubmit}>
          <p>Borrar pelicula</p>
          <input
            value={elId}
            onChange={(event) => setId(event.target.value)}
            type="number"
          />
          <button type="submit">Borrar Pelicula</button>

          {formulario && <p>Pelicula Borrada Correctamente</p>}
          {error && <p>Sucedio un error, intente nuevamente</p>}
        </form>
      </div>
    </div>
  );
}

export default BorrarPelicula;
