const btnGetMovies = document.querySelector("#get-movies");
const container = document.querySelector(".container");

const urlMovies = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

btnGetMovies.onclick = async function () {

  const respuesta = await fetch(urlMovies);

  const data = await respuesta.json();
  readMovies(data.Search);
};

function readMovies(movies) {
  movies.innerHTML = "";
  movies.forEach((movie, index) => {
    container.innerHTML += `<div class="card">
        <img src="${movie.Poster}" alt="" />
        <h4>${movie.Title}</h4>
        <p>
          ${movie.Year}
        </p>
      </div>
    `;
  });
}
