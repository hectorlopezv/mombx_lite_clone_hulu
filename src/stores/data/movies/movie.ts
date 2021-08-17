import { action, makeObservable, observable } from "mobx";
import MovieStore from "./movie-store";
import RootStore from "../../root-store";
let runningId = 0;

export interface MovieDataApi {
  vote_average?: number;
  overview?: string;
  release_date?: string;
  adult?: boolean;
  backdrop_path?: string;
  vote_count?: number;
  genre_ids?: number[];
  title?: string;
  original_language?: string;
  original_title?: string;
  poster_path?: string;
  id?: number;
  video?: boolean;
  popularity?: number;
  media_type?: string;
  [key: string]: any;
}
export default class Movie {
  id: number;
  //private readonly disposer: () => void;
  private movieStore: MovieStore;
  private readonly rootStore: RootStore;
  movieData: MovieDataApi;
  constructor(
    store: MovieStore,
    rootStore: RootStore,
    movieData: MovieDataApi
  ) {
    makeObservable(this, {
      movieData: observable,
    });
    this.id = runningId++;
    this.rootStore = rootStore;
    this.movieStore = store;
    this.movieData = movieData;

    //reaction when somehtin happen
    //need to be cleaned if we are erasing the Element
    // this.disposer = reaction(
    //   () => this.isCompleted,
    //   () =>
    //     console.log(
    //       `${this.id}-Todo: ${this.name} changed to ${
    //         this.isCompleted ? "Done" : "Incomplete"
    //       }`
    //     )
    //);
  }

  remove() {
    //this.store.removeMovie(this.name);
  }

  @action
  toggleTodo() {
   // this.isCompleted = !this.isCompleted;
  }

  @action
  updateName(name: string) {
    //this.name = name;
  }

  //   dispose() {
  //     this.disposer();
  //   }
}
