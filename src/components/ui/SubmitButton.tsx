import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

interface SubmitButtonProps {
    onPress: () => void;
    title: string;
}

const SubmitButton = ({ onPress, title }: SubmitButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: 'white',
        /*         fontFamily: 'InterRegular', */
        fontSize: 22
    },
});
