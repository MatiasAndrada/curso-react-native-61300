import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
//Styles
import styles from "./styles/inputForm";

interface InputFormProps {
    label: string;
    error: string;
    onChange: (text: string) => void;
    isSecure?: boolean;
}

const InputForm = ({ label, error, onChange, isSecure }: InputFormProps) => {
    const [input, setInput] = useState("");

    const onChangeText = (text: string) => {
        setInput(text);
        onChange(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

export default InputForm;

