import { AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Navigation from "./src/navigation";
import { name as appName } from "./app.json";

import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => App);
