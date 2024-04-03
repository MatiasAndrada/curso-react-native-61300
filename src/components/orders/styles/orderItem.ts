import { StyleSheet } from "react-native";
import { colors } from "../../../styles";
const styles = StyleSheet.create({
  cardContainer: {
    height: 150,
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  /*
  image: {
    minHeight: 90,
    minWidth: 90,
    width: "30%",
    borderRadius: 5,
  },*/
  titleText: {
    flex: 2,
    marginTop: 8,
    fontSize: 22,
    color: colors.textPrimary,
  },
  columnContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"

  },
  label: {
    fontSize: 18,
    color: colors.textSecondary
  },
  quantityText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "bold",
    color: colors.textPrimary
  },
  priceText: {
    marginBottom: 18,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary
  },
});

export default styles;