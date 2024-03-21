import { StyleSheet } from "react-native"
import { colors } from "../../styles";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        gap: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;