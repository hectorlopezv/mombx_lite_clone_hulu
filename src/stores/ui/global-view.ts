import {  makeAutoObservable } from "mobx";
import RootStore from "../root-store";

export enum Views {
  Todos,
  Users,
}
export enum Genres {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchMystery,
  fetchSciFi,
  fetchWestern,
  fetchAnimation,
  fetchTV,
}

export default class GlobalView {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  currentView: Views = Views.Todos;

  
  genre: Genres = Genres.fetchTrending;
 
  updateView(view: Views) {
    this.currentView = view;
  }

  
  updateGenre(genre: Genres) {
    this.genre = genre;
  }
}
