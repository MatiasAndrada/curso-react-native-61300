import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./styles/signIn"
export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCard}>
                    <Text style={styles.title}>LOGIN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                    />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ View >
            </View>
        )
    }
}