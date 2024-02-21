import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./styles/signUp";


export default class signUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCard}>
                    <Text style={styles.title}>Register</Text>
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