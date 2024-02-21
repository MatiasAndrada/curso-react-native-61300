import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default style = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16, // Agregado para dar espacio en los lados
  },
  flatList: {
    height: "100%",
    flex: 1,
    /*    gap: 16, */
    justifyContent: "space-between",
  },
});
