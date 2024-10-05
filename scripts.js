document.addEventListener("DOMContentLoaded", function () {
  async function getMovieDetails() {
    const movieId = 550; // Exemplo de filme (ID do filme "Clube da Luta")
    const apiKey = "da8a5fd8ae013bcca6ca77e1e96fa64f"; // Substitua pela sua chave de API da TMDb
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`;

    try {
      const response = await fetch(movieUrl);
      const movie = await response.json();

      // Acessando os dados do filme
      const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const movieTitle = movie.title;
      const movieOverview = movie.overview;

      // Inserindo os dados no HTML
      document.getElementById("movie-img").src = movieImage;
      document.getElementById("movie-title").textContent = movieTitle;
      document.getElementById("movie-overview").textContent = movieOverview;
    } catch (error) {
      console.error("Erro ao buscar os detalhes do filme:", error);
    }
  }

  getMovieDetails(); // Chama a função para buscar os detalhes

  async function Movie1() {
    const movieImage =
      "https://image.tmdb.org/t/p/w500/53YWSo75mSaw1vd2YEeX5kwkRos.jpg";
    var movie = document.getElementById("movie1");
    if (movie) {
      movie.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }

  async function Movie2() {
    const movieImage =
      "https://www.themoviedb.org/t/p/w500/fZ4m3Bm0E13v9rnYQLGEy5IYScH.jpg";
    var movie1 = document.getElementById("movie2");
    if (movie1) {
      movie1.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }

  async function Movie3() {
    const movieImage =
      "https://image.tmdb.org/t/p/w500/b5pl6GmQmTCHmZKEBhXPN0gmoAq.jpg";
    var movie1 = document.getElementById("movie3");
    if (movie1) {
      movie1.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }

  async function Movie4() {
    const movieImage =
      "https://image.tmdb.org/t/p/w500/xGvz7nlGQeePcVOpAzOcHsC7kRt.jpg";
    var movie1 = document.getElementById("movie4");
    if (movie1) {
      movie1.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }

  async function Movie5() {
    const movieImage =
      "https://image.tmdb.org/t/p/w500/2fJn438T3W2XDlyBlgNuAeAAHrj.jpg";
    var movie1 = document.getElementById("movie5");
    if (movie1) {
      movie1.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }

  async function Movie6() {
    const movieImage =
      "https://image.tmdb.org/t/p/w500/fSrBQXN5u0EeG9Acv2SBX84yuBY.jpg";
    var movie1 = document.getElementById("movie6");
    if (movie1) {
      movie1.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }

  async function Movie7() {
    const movieImage =
      "https://image.tmdb.org/t/p/w500/g7ZNO5yvpr9jJqQBcTvcNICC9yF.jpg";
    var movie1 = document.getElementById("movie7");
    if (movie1) {
      movie1.innerHTML = `<img src="${movieImage}" alt="Movie Poster">`;
    } else {
      console.error("Elemento com id 'movie1' não encontrado.");
    }
  }



  Movie1();
  Movie2();
  Movie3();
  Movie4();
  Movie5();
  Movie6();
  Movie7();
});
