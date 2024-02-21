import * as React from 'react';
import styles from './styles/user';
import { View, Text, TouchableOpacity } from 'react-native';

export default function UserScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <Text style={styles.title}>Authentication</Text>
                <TouchableOpacity
                    style={styles.buttonSignIn}
                    onPress={() => alert('User button pressed')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.or}>or</Text>
                <TouchableOpacity
                    style={styles.buttonSignUp}
                    onPress={() => alert('User button pressed')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}