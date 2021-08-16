//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "./stores/helpers/create-store";
import { StoreProvider } from "./stores/helpers/store-context";
const rootStore = createStore();
// create 4 users
rootStore.dataStores.usersStore.addUser("Georgy");
rootStore.dataStores.usersStore.addUser("Student 1");
rootStore.dataStores.usersStore.addUser("Student 2");
rootStore.dataStores.usersStore.addUser("Student 3");
if (module.hot) {
  module.hot.accept();
}
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
