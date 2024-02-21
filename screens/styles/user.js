import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

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
    borderRadius: 15,
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
  or: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },

  buttonSignIn: {
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#00aaf7",
    padding: 12,
  },
  buttonSignUp: {
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#ff0015",
    padding: 12,
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
});

export default styles;
