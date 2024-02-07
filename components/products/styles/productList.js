import { colors } from "../../../styles/colors";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    /*   backgroundColor: colors.background, */
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "blue",
    textShadowOffset: { width: 6, height: 10 },
    textShadowRadius: 22,
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
});
