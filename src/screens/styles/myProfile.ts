import { StyleSheet } from "react-native";
import { colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.background,
        height: "100%",
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
    },
    button: {
        width: "80%",
        elevation: 10,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});

export default styles;