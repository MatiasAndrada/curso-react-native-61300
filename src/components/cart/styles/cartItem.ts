import { StyleSheet } from "react-native";
import { colors, borderRadius } from "../../../styles";

const styles = StyleSheet.create({
    cardContainer: {
        margin: "auto",
        marginVertical: 8,
        padding: 8,
        width: "90%",
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
        flex: 3,
        marginTop: 8,
        fontSize: 22,
        color: colors.textPrimary,
    },
    quantityText: {
        flex: 1,
        marginTop: 10,
        color: colors.textPrimary
    },
    priceText: {
        flex: 1,

        marginTop: 10,
        color: colors.textPrimary
    },
})
export default styles;