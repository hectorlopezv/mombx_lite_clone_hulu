import { action, observable, reaction } from "mobx";
import TodoStore from "./todo-store";
import RootStore from "../../root-store";
let runningId = 0;

export default class Todo {
  id: number;

  userId: number;

  @observable
  name: string;
  @observable
  isCompleted: boolean = false;

  private readonly disposer: () => void;
  private store: TodoStore;
  private readonly rootStore: RootStore;
  constructor(
    name: string,
    userId: number,
    store: TodoStore,
    rootStore: RootStore
  ) {
    this.store = store;
    this.id = runningId++;
    this.name = name;
    this.userId = userId;
    this.rootStore = rootStore;

    this.disposer = reaction(
      () => this.isCompleted,
      () =>
        console.log(
          `${this.id}-Todo: ${this.name} changed to ${
            this.isCompleted ? "Done" : "Incomplete"
          }`
        )
    );
  }

  remove() {
    this.store.removeTodo(this.name);
  }

  @action
  toggleTodo() {
    this.isCompleted = !this.isCompleted;
  }

  @action
  updateName(name: string) {
    this.name = name;
  }

  dispose() {
    this.disposer();
  }
}
