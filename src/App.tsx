import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "./stores/helpers/use-stores";
function App() {
  const {
    dataStores: { todoStore },
  } = useStores();
  console.log("dataStores", todoStore);
  return( <div className="App">
<h1>lets build hulu 2.0</h1>
  </div>);
}

export default observer(App);
