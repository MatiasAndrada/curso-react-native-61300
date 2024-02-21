import { AppRegistry } from "react-native";
import React from "react";
import Navigation from "./Navigation";
import { name as appName } from "./app.json";

import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => App);
