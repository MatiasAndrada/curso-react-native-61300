import { StyleSheet } from "react-native";
import { colors, borderRadius } from "../../../styles";

const styles = StyleSheet.create({
    cardContainer: {
        margin: "auto",
        marginVertical: 8,
        padding: 8,
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.neutralBackground,
        borderRadius: borderRadius.md
    },
    leftContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        marginTop: 8,
        fontSize: 22,
        color: colors.textPrimary,
    },
    label: {
        fontSize: 14,
        color: colors.textSecondary
    },
    quantityText: {
        color: colors.textPrimary
    },
    priceText: {
        color: colors.textPrimary
    },
})
export default styles;