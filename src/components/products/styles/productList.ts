import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    color: colors.primary,
  },
});
export default styles;
