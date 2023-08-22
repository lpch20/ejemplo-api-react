export async function LoaderEditarPelicula({ params }) {
  const myHeaders = new Headers();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const response = await fetch("http://localhost:3000/peliculas/" + params.id);

  const pelicula = await response.json();

  return { pelicula };
}
