import { StyleSheet } from "react-native";

import { colors, borderRadius } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  containerCard: {
    width: "85%",
    padding: 70,
    borderRadius: borderRadius.md,
    /*   gap: 30, */
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
  },
  title: {
    marginBottom: 20,
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.highlight,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
  },
  button: {
    marginVertical: 10,
    backgroundColor: colors.secondary,
    padding: 12,
    width: "60%",
    alignSelf: "center",
    borderRadius: borderRadius.lg,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#000",
  },
});

export default styles;
