import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

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
    isEmptyText: {
        marginTop: 10,
        color: colors.textSecondary
    }
})


export default styles 