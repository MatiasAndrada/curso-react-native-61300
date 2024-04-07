import { StyleSheet } from "react-native";
import { colors, borderRadius } from "../../../styles";
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    margin: "auto",
    width: "100%",
    padding: 8,
    borderWidth: 2,
    borderRadius: borderRadius.md,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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
    fontSize: 22,
    color: colors.textPrimary,
  },
  columnContainer: {
    padding: 10,

  },
  label: {
    fontSize: 14,
    color: colors.textSecondary
  },
  quantityText: {
    fontSize: 18,
    color: colors.textPrimary
  },
  priceText: {
    fontSize: 18,
    color: colors.textPrimary
  },
});

export default styles;