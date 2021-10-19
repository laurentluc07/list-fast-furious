const apiKey = "a4518acd";

async function getData() {
  let result = await fetch(`https://www.omdbapi.com/?s=fast+%26+furious&apikey=${apiKey}`);
  result = await result.json();
  // console.log(result.Search);
  let movies = result.Search;
  movies.forEach(async(movie) => {
    // moviesId.push(movie.imdbID);
    let directors = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
    directors = await directors.json()
    console.log(directors);
    let color = "#000000";
    if (movie.Year < 2015) { color = "#42a5f5";}
    let celluleColor = "#ced4da";
    if (directors.Actors.includes("Paul Walker")) { celluleColor = "#45dc7c";}
    const displayMovie = `
        <table class="rwd-table">
          <tr>
            <td><img src="${movie.Poster}" alt=""></td>
            <td class="titre" style="background-color:${celluleColor};">${movie.Title}</td>
            <td class="annee" style="color:${color};">${movie.Year}</td>
            <td class="realisateurs" >${directors.Director}</td>
          </tr>
        </table>

        `;
    results.insertAdjacentHTML("beforeend", displayMovie);
  });
};
getData();
