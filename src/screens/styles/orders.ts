import { StyleSheet } from "react-native";
import { colors } from "../../styles";

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    totalText: {
        color: colors.textPrimary,
    }
})

export default styles;