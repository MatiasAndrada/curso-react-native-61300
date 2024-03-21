import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    gap: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  title: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});
