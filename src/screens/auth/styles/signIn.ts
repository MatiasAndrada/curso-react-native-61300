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
  orText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  redirect: {
    marginVertical: 10,
    /*     backgroundColor: colors.secondary, */
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: "60%",
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: "underline",
    color: colors.active,
  },
});

export default styles;
