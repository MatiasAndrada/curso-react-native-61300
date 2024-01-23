import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
/* import Users from "./components/Users"; */

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOLA CODER!</Text>
      {/*       <Text style={styles.text}> Ok?</Text> */}
      {/* <Users user="Matias" /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "blue",
    textShadowOffset: { width: 6, height: 10 },
    textShadowRadius: 22,
  },
});
