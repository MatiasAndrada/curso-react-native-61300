import { StyleSheet } from 'react-native';
import { colors, borderRadius } from "../../../styles";


const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        backgroundColor: colors.secondary,
        padding: 12,
        width: "60%",
        alignSelf: "center",
        borderRadius: borderRadius.lg,
    },
    text: {
        textAlign: "center",
        color: 'white',
        /*         fontFamily: 'InterRegular', */
        fontSize: 22
    },
});

export default styles;