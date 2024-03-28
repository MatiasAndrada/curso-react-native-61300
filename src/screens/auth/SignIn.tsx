import { Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
//Components
import InputForm from "../../components/ui/InputForm";
import SubmitButton from "../../components/ui/SubmitButton";
//Styles 
import styles from "./styles/signIn";
import { colors } from "../../styles";
//Services
import { useLoginMutation } from "../../services/authService";
//Validations
import { z } from "zod";
import { SignInSchema } from "../../validations/signInSchema";
//Store
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
//Types
import type { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/AuthStack';

type NavigationProp = StackNavigationProp<StackParamList, 'Authentication'>;

const SignIn = ({ navigation }: { navigation: NavigationProp }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerSignIn, result] = useLoginMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
        }
    }, [result]);

    const onSubmit = () => {
        try {
            const values = SignInSchema.parse({ email, password });
            triggerSignIn(values);
        } catch (err) {
            if (err instanceof z.ZodError) {
                for (const issue of err.issues) {
                    switch (issue.path[0]) {
                        case "email":
                            setErrorMail(issue.message);
                            break;
                        case "password":
                            setErrorPassword(issue.message);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <Text style={styles.title}>Login</Text>
                <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
                <InputForm
                    label={"Password"}
                    error={errorPassword}
                    onChange={setPassword}
                    isSecure={true}
                />
                {result.isLoading ? (
                    <ActivityIndicator size="large" color={colors.active} />
                ) : (
                    <SubmitButton title={"Sign In"} onPress={onSubmit} />
                )}
                <Text style={styles.orText}>Or</Text>
                <Pressable onPress={() => navigation.navigate("SignUp")} style={styles.redirect}>
                    <Text style={styles.buttonText}>Ir al registro</Text>
                </Pressable>
            </View>
        </View>
    );
};


export default SignIn;