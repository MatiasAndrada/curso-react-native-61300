import { StyleSheet } from "react-native";
import { colors, borderRadius } from "../../../styles";

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        padding: 8,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.neutralBackground,
        borderRadius: borderRadius.md
    },
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
})
export default styles;