import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    /*     alignItems: "flex-start", */
    margin: 5,
    width: 150,
    height: 150,
    backgroundColor: colors.lowlightBackground,
    borderRadius: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    /*     overflow: Platform.OS === "android" ? "hidden" : "visible", */
  },
  textStyling: {
    fontSize: 20,
    fontStyle: "italic",
    color: colors.textPrimary,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});
