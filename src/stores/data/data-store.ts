import RootStore from "../root-store";
import MovieStore from "./movies/movie-store";
export default class DataStore {
  movieStore: MovieStore;

  constructor(rootStore: RootStore) {
    this.movieStore = new MovieStore(rootStore);
  }
}
