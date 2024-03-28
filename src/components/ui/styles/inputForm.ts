import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  subtitle: {
    width: "90%",
    textAlign: "center",
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: "red",

    fontStyle: "italic",
  },
  input: {
    width: "90%",
    backgroundColor: colors.highlight,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colors.highlight,
    padding: 6,
    fontSize: 14,
  },
});

export default styles;
