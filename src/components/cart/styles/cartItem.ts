import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const styles = StyleSheet.create({
    cardContainer: {
        width: "90%",
        backgroundColor: colors.neutralBackground,
    },
    titleText: {
        fontSize: 22,
        color: colors.textPrimary,

    },
    priceText: {
        marginTop: 10,
        color: colors.textPrimary
    },
    quantityText: {
        marginTop: 10,
        color: colors.textPrimary
    }
})
export default styles;