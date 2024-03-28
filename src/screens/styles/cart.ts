import { StyleSheet } from "react-native";
import { colors, borderRadius } from "../../styles";

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        marginTop: 10,
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    totalText: {
        marginTop: 10,
        fontSize: 20,
        color: colors.textPrimary
    },
    buttonText: {
        padding: 12,
        marginBottom: 16,
        fontSize: 18,
        color: colors.textPrimary,
        backgroundColor: colors.lowlightBackground,
        borderRadius: borderRadius.md
    },

    isEmptyText: {
        marginTop: 10,
        color: colors.textSecondary
    }
})


export default styles 