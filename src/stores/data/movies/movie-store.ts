import { makeAutoObservable } from "mobx";
import RootStore from "../../root-store";
import Movie from "./movie";
import { MovieDataApi } from "./movie";
export default class MovieStore {
  movieList: Movie[] = [];
  state: string = "";
  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addMovie(dataMovie: MovieDataApi) {
    return new Movie(this, this.rootStore, dataMovie);
  }
  async fetchJson(url: string) {
    const data = await fetch(url);
    const response = await data.json();
    return response.results;
  }
  *fetchMovies(url: string): any {
   // console.log("Fetching movies...")
    this.movieList = [];
    this.state = "pending";
    try {
      // Yield instead of await.
      const projects = yield this.fetchJson(url);
      //console.log("projects", projects)
      const movieData: MovieDataApi[] = projects;
      this.state = "done";
      this.setMovies(movieData);
    } catch (error) {
      this.state = "error";
    }
  }
  setMovies(movies: MovieDataApi[]) {
    const moviesRecieved = movies.map((movie: MovieDataApi) => {
      return this.addMovie(movie);
    });
    //console.log("moviesRecieved", moviesRecieved);
    this.movieList = moviesRecieved;
  }
  get obtainMovieList() {
    return this.movieList;
  }
  getMovie(title: string) {
    return [];
  }
  removeMovie(title: string) {
    // const MovieToRemove = this.getMovie(name);
    // if (MovieToRemove) {
    //   MovieToRemove.dispose();
    //   const MovieToRemoveIndex = this.movieList.indexOf(MovieToRemove);
    //   this.movieList.splice(MovieToRemoveIndex, 1);
    // }
  }

  get completedMovies() {
    return [];
  }
  get moviesByAverage() {
    return [];
  }
  get moviesByVotesCount() {
    return [];
  }
  get moviesByYears() {
    return [];
  }
  get tvSeriesList() {
    return [];
  }
  get moviesList() {
    return [];
  }
  get adultMovies() {
    return [];
  }
}
