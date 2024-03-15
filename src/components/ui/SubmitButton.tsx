import { Pressable, Text, View } from "react-native";
import React from "react";
//Styles
import styles from "./styles/submitButton";

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
