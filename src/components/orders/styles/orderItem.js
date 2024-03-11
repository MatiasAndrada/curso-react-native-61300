import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    height: 100,
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: "30%",
    borderRadius: 5,
  },
  text: {
    width: "70%",
    fontFamily: "InterRegular",
    fontSize: 20,
  },
  textMin: {
    width: "70%",
    fontFamily: "InterRegular",
    fontSize: 15,
  },
});
