import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
//Components
import InputForm from "../../components/ui/InputForm";
import SubmitButton from "../../components/ui/SubmitButton";
//Services
import { useSignUpMutation } from "../../services/authService";
//Validations
import { z } from "zod";
import { SignUpSchema } from "../../validations/signUpSchema";
//Store
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
//Types
import type { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/AuthStack";

type NavigationProp = StackNavigationProp<StackParamList, "Authentication">;

const SignUp = ({ navigation }: { navigation: NavigationProp }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignUp, result] = useSignUpMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        try {
            const values = SignUpSchema.parse({ email, password, confirmPassword });
            triggerSignUp(values);
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
                        case "confirmPassword":
                            setErrorConfirmPassword(issue.message);
                            break;
                        default:
                            break;
                    }
                }
            }
        };
    }

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
        }
    }, [result]);

    return (
        <View>
            <Text>Register</Text>
            <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
            <InputForm
                label={"Password"}
                error={errorPassword}
                onChange={setPassword}
                isSecure={true}
            />
            <InputForm
                label={"Confirm password"}
                error={errorConfirmPassword}
                onChange={setConfirmPassword}
                isSecure={true}
            />
            <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text>Ir al login</Text>
            </Pressable>
            <SubmitButton title={"Register"} onPress={onSubmit} />
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});