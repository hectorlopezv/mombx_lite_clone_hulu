import { action, autorun, computed, observable } from "mobx";
import RootStore from "../root-store";

export enum Views {
  Todos,
  Users,
}

export default class GlobalView {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable
  currentView: Views = Views.Todos;

  @action
  updateView(view: Views) {
    this.currentView = view;
  }
}
