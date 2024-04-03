import { StyleSheet } from "react-native";
import { colors } from "../../../styles";
const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    flex:1,
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
    flex: 3,
    marginTop: 8,
    fontSize: 22,
    color: colors.textPrimary,
  },
  quantityText: {
    flex: 1,
    alignSelf: "flex-start",
    marginTop: 10,
    color: colors.textPrimary
  },
  priceText: {
    flex: 1,
    alignSelf: "flex-end",
    marginTop: 10,
    color: colors.textPrimary
  },
});

export default styles;